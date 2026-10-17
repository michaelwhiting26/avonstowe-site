"""Pen-and-ink engraving of a headshot, Kebiki style: ink lines on one flat brand colour.

Usage: python3 -I engrave.py <photo> <out.jpg> [paper_hex] [ink_hex]
Live portrait (17 Oct 2026): python3 -I docs/portrait/engrave.py <headshot> public/michael.jpg
(defaults: brass paper c9a44a, navy ink 0a1628). The headshot and the output are kept in
Dropbox CONSTRUCTION DISPUTES/A. AVONSTOWE/Website/Portrait.
Contours come from a difference of Gaussians (dark lines darker than their surroundings);
shading is tone-modulated hatching: line width grows with darkness, extra angles cross-hatch the shadows.
"""
import sys
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter

src, out = sys.argv[1], sys.argv[2]
paper_hex = sys.argv[3] if len(sys.argv) > 3 else "c9a44a"
ink_hex = sys.argv[4] if len(sys.argv) > 4 else "0a1628"

W, H = 1760, 2200  # 2x of the 880x1100 delivery size, downsampled at the end for clean lines
img = Image.open(src).convert("L")
w0, h0 = img.size
crop_h = round(w0 * 5 / 4)
img = img.crop((0, 0, w0, min(crop_h, h0))).resize((W, H), Image.LANCZOS)
lum = np.asarray(img, dtype=np.float64) / 255.0

# Tone for hatching: smoothed, lifted so the white backdrop and highlights stay bare paper.
tone = gaussian_filter(lum, 2.0)
t = np.clip((1.0 - tone - 0.38) / 0.62, 0, 1) ** 1.1

yy, xx = np.mgrid[0:H, 0:W].astype(np.float64)
P = 9.0  # line period at 2x (5.5 px delivered)
wobble = 0.9 * np.sin(yy / 41.0 + xx / 67.0) + 0.6 * np.sin(xx / 29.0 - yy / 83.0)


def ramp(v, lo, span):
    x = np.clip((v - lo) / span, 0, 1)
    return x * x * (3 - 2 * x)


def hatch(angle_deg, coverage, phase=0.0):
    a = np.deg2rad(angle_deg)
    u = (xx * np.cos(a) + yy * np.sin(a) + wobble) / P + phase
    d = np.abs(u - np.floor(u) - 0.5)  # 0 at the line's centre
    return np.clip((coverage / 2 - d) * P + 0.5, 0, 1) * (coverage > 0.02)


layers = [
    hatch(45, ramp(t, 0.10, 0.60) * 0.36),
    hatch(-45, ramp(t, 0.42, 0.40) * 0.34, 0.25),
    hatch(12, ramp(t, 0.68, 0.25) * 0.36, 0.5),
    hatch(100, ramp(t, 0.84, 0.14) * 0.5, 0.1),
]
shade = np.maximum.reduce(layers)

# Contours: fine strands (hair, lashes, lips) and bolder outlines (jaw, ears, lapels).
fine = gaussian_filter(lum, 2.4) - gaussian_filter(lum, 1.1)
bold = gaussian_filter(lum, 5.0) - gaussian_filter(lum, 2.4)
edges = np.maximum(np.clip((fine - 0.006) * 30, 0, 1), np.clip((bold - 0.013) * 18, 0, 1))

ink = np.clip(np.maximum(shade, edges), 0, 1)
ink[t > 0.93] = 1.0

paper = np.array([int(paper_hex[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)
inkc = np.array([int(ink_hex[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)
rgb = paper * (1 - ink[..., None]) + inkc * ink[..., None]
Image.fromarray(rgb.astype(np.uint8)).resize((W // 2, H // 2), Image.LANCZOS).save(
    out, quality=84, optimize=True, progressive=True
)
print("wrote", out)
