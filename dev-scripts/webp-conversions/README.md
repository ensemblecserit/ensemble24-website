# Webp-Conversions Dev Scripts

_These are utility scripts that are not meant for production._
Helps in converting images to webp format, and some quick hacks.

## Requirements

- cwebp
  A CLI tool to convert images to webp format. [Download](https://developers.google.com/speed/webp/docs/precompiled)
- Pillow
  A python library to manipulate images.

## Order of execution

1. Resize images to a specific width (`resize.py`).
2. Rotate images that are not in the correct orientation (`rotateImages.py`).
3. Convert images to webp format (`convertToWebp.py`).
4. Copy the images to the destination folder.
