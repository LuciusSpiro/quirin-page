import fitz
import os
import sys

out_dir = r"c:\Users\Luciu\projects\claude\Quirin-web-page\public\images"
os.makedirs(out_dir, exist_ok=True)

pdfs = [
    (r"c:\Users\Luciu\projects\claude\Quirin-web-page\hintergrund\Quirinspiel-Regionenbeschreibung.pdf", "region"),
    (r"c:\Users\Luciu\projects\claude\Quirin-web-page\hintergrund\Quirinspiel-Hauptdokument.pdf", "haupt"),
]

extracted = []
for path, prefix in pdfs:
    doc = fitz.open(path)
    img_idx = 0
    for page_num, page in enumerate(doc):
        for img_info in page.get_images(full=True):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            ext = base_image["ext"]
            img_bytes = base_image["image"]
            w, h = base_image["width"], base_image["height"]
            # Skip tiny images (icons, bullets < 100px)
            if w < 100 or h < 100:
                continue
            fname = f"{prefix}_p{page_num+1:02d}_{img_idx:02d}.{ext}"
            fpath = os.path.join(out_dir, fname)
            with open(fpath, "wb") as f:
                f.write(img_bytes)
            extracted.append(f"{fname} ({w}x{h})")
            img_idx += 1
    doc.close()
    print(f"{prefix}: {img_idx} images extracted")

print("\nAll extracted:")
for e in extracted:
    print(" ", e)
