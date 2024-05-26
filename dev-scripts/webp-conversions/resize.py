"""
Makes the photos in `input_dir` to be cropped to the correct ratio for the frontend.

This doesn't resize the images, it just crops them to the correct ratio.
For eg: if photo is 5184 x 3456, it will be cropped to 5184 x 3059 (ie 1.5 ratio)
"""
import os
from PIL import Image

input_dir = "./input"
output_dir = "./result"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

files = os.listdir(input_dir)
i = 1
# Image ratios for the frontend.
port_r = 750 / 1000
land_r = 1600 / 944

for file in files:
    if (not os.path.isfile(os.path.join(input_dir, file))) and (not file.endswith(".webp")):
        continue

    src = os.path.join(input_dir, file)

    with Image.open(src) as img:
        width, height = img.size

        if width > height:
            # Landscape
            hc = width / land_r
            y = height - hc

            print("file: ", file, "Landscape: ", (0, y, width, hc + y))

            # Centers the crop
            img.crop((0, int(y), width, int(hc + y))).save(os.path.join(output_dir, file))
        else:
            # Portrait
            hc = width / port_r
            y = height - hc

            print("file: ", file, "Landscape: ", (0, y, width, hc + y))

            img.crop((0, int(y), width, int(hc + y))).save(os.path.join(output_dir, file))

    print(file, width, height)
