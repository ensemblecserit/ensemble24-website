"""
Some images maybe rotated or due to different encodings, the images may be read differently.

So this script rotates the images specified to the correct orientation.
"""

import os
from PIL import Image

input_dir = "./input"
output_dir = "./result"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

rotate_files = []
files = os.listdir(input_dir)

print("-----Rotate images-----")

print("\nRotate images:")
print("1. 90 degrees")
print("2. 180 degrees")
print("3. 270 degrees")
rotate_amount = int(input("Choice: "))

if rotate_amount == 1:
    rotate_amount = Image.ROTATE_90
elif rotate_amount == 2:
    rotate_amount = Image.ROTATE_180
else:
    rotate_amount = Image.ROTATE_270

print("\nChoice:")
print("1. Enter file names to rotate")
print("2. Ask for each file")
choice = input("Enter choice: ").lower()
print()
if choice == "1":
    rotate_files = [item.strip() for item in input("Enter file names to rotate (space sep): ").split(" ")]
else:
    print("Rotate images - input y/n:")

i = 1
for file in files:
    if (not os.path.isfile(os.path.join(input_dir, file))) and (not file.endswith(".webp")):
        continue

    if choice != "1":
        rotate = input(f"{file}? (y/n): ").lower()
        if rotate != "y":
            continue
    else:
        if file not in rotate_files:
            continue

    print(f"Rotating {file}...")

    src = os.path.join(input_dir, file)

    with Image.open(src) as img:
        img.transpose(Image.ROTATE_90).save(os.path.join(output_dir, file))
