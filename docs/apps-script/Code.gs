/**
 * Avonstowe enquiry form handler (Google Apps Script web app).
 * Runs inside michael@avonstowe.com's own Google account and emails each
 * enquiry to him. Nothing else is stored or sent anywhere.
 *
 * Set up (about 5 minutes):
 *  1. script.google.com > New project. Paste this file over Code.gs.
 *  2. Project Settings > tick "Show appsscript.json". Replace it with the
 *     appsscript.json in this folder (limits the script to sending email only).
 *  3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *     Approve the "send email as you" permission.
 *  4. Copy the Web app URL (ends /exec) and give it to Claude, who puts it in
 *     lib/site.ts (formEndpoint) and redeploys the site.
 *
 * Spam: honeypot field ("website") must be empty, the form must have been open
 * for at least 4 seconds, and there is a cap of 20 enquiries an hour overall
 * and 3 an hour per email address.
 */

var TO = "michael@avonstowe.com";
var LIMITS = { min: 4000, perHour: 20, perSenderPerHour: 3 };
var FIELDS = [
  ["role", "You are", 60], ["stage", "Where the matter is now", 60],
  ["parties", "Parties", 600], ["project", "Project and country", 160],
  ["outline", "Overview", 1500], ["keyDate", "Key date", 120],
  ["name", "Name", 120], ["organisation", "Organisation", 160],
  ["email", "Email", 200], ["phone", "Phone or WhatsApp", 30]
];

function doPost(e) {
  try {
    var d = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (d.website) return reply_(true); // honeypot: pretend success
    if (!(Number(d.elapsedMs) >= LIMITS.min)) return reply_(false, "too_fast");

    var v = {};
    for (var i = 0; i < FIELDS.length; i++) {
      var k = FIELDS[i][0];
      v[k] = String(d[k] || "").trim().slice(0, FIELDS[i][2]);
    }
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email);
    if (!v.role || !v.stage ||
        !v.name || !v.organisation || !emailOk) {
      return reply_(false, "invalid");
    }

    var cache = CacheService.getScriptCache();
    var hourKey = "n:" + Utilities.formatDate(new Date(), "UTC", "yyyyMMddHH");
    var senderKey = "s:" + Utilities.base64EncodeWebSafe(
      Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, v.email.toLowerCase())) + hourKey;
    var n = Number(cache.get(hourKey) || 0), s = Number(cache.get(senderKey) || 0);
    if (n >= LIMITS.perHour || s >= LIMITS.perSenderPerHour) return reply_(false, "rate_limited");
    cache.put(hourKey, String(n + 1), 3600);
    cache.put(senderKey, String(s + 1), 3600);

    var body = FIELDS
      .filter(function (f) { return v[f[0]]; })
      .map(function (f) { return f[1] + ": " + v[f[0]]; })
      .join("\n\n");
    MailApp.sendEmail({
      to: TO,
      replyTo: v.email,
      name: "Avonstowe website",
      subject: ("Enquiry: " + v.role + ", " + v.organisation).slice(0, 150),
      body: body + "\n\n---\nSent from the enquiry form on avonstowe.com. Reply to answer the enquirer directly."
    });
    return reply_(true);
  } catch (err) {
    console.error(err);
    return reply_(false, "error");
  }
}

function doGet() {
  return reply_(true, "alive");
}

function reply_(ok, code) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: ok, code: code || null }))
    .setMimeType(ContentService.MimeType.JSON);
}
