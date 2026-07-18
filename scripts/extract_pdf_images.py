from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = ROOT.parent / "LianLijo_Portfolio.pdf"
OUTPUT_DIR = ROOT / "public" / "images" / "portfolio"
SCALE = 2.0


def main() -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(f"PDF not found at {PDF_PATH.resolve()}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(PDF_PATH)
    for index, page in enumerate(doc, start=1):
        pix = page.get_pixmap(matrix=fitz.Matrix(SCALE, SCALE), alpha=False)
        out_file = OUTPUT_DIR / f"page-{index:02d}.png"
        pix.save(out_file)

    print(f"Extracted {len(doc)} pages to {OUTPUT_DIR.resolve()}")


if __name__ == "__main__":
    main()
