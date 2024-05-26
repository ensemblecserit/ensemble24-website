import os
from PIL import Image

input_dir = "./result"
# create result/out directory if it doesn't exist
if not os.path.exists(f"{input_dir}/out"):
    os.makedirs(f"{input_dir}/out")

files = os.listdir(input_dir)

print("----WEBP Convertor----")
print("\nInput dir: ", input_dir)
quality = int(input("Enter quality (0-100): "))

if quality < 0 or quality > 100:
    print("Invalid quality value. Exiting...")
    exit()

print("\nStarting conversion...")

out_details = []

i = 1
for item in files:
    isLandscape = "false"
    if (not os.path.isfile(os.path.join(input_dir, item))) and (not item.endswith(".webp")):
        continue

    src = os.path.join(input_dir, item)

    with Image.open(src) as img:
        width, height = img.size
        if width > height:
            # Landscape
            w = 1600
            h = 944
            isLandscape = "true"
        else:
            # Portrait
            w = 750
            h = 1000
            isLandscape = "false"

    out_name = f"{i}.webp"

    # The actual conversion to webp
    os.system(f"cwebp {src} -q {quality} -resize {w} {h} -o result/out/{out_name} -mt -quiet")

    out_details.append((out_name, isLandscape, i))
    print(f"{item} completed...")

    i += 1


def convert_to_padded_string(num):
    return '{:03d}'.format(num)


print("\nConversion completed. Generating output...")

print("\nCOPY THIS TO CLIPBOARD:")

# Prints the image array with all the necessary data
txt = ""
# [(file, isLand, index) ...]
for item in out_details:
    # new Photo(<name: str>, <isLandscape: boolean>)
    txt += f"""new Photo("{item[0]}", {item[1]}),\n"""

print(txt)
