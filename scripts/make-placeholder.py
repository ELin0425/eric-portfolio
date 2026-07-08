import sys
from PIL import Image, ImageDraw, ImageFont

def make(path, w, h, label):
    img = Image.new("RGB", (w, h), "#EFEDE7")
    d = ImageDraw.Draw(img)
    # border
    d.rectangle([0, 0, w - 1, h - 1], outline="#B9B5AC", width=2)
    try:
        font = ImageFont.truetype("consola.ttf", 22)
    except Exception:
        font = ImageFont.load_default()
    text = label
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - th) / 2), text, fill="#6E727A", font=font)
    img.save(path, "PNG")
    print("wrote", path)

if __name__ == "__main__":
    path, w, h, label = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
    make(path, w, h, label)
