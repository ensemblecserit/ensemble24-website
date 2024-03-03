import os
from PIL import Image


src_dir = "./result"

files = os.listdir(src_dir)

i = 1
for file in files:
	if (not os.path.isfile(os.path.join(src_dir, file))) and (not file.endswith(".webp")):
		continue


	if int(file.split(".")[0]) not in [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 29, 31]:
		continue

	print(file)

	src = os.path.join(src_dir, file)

	with Image.open(src) as img:
		img.transpose(Image.ROTATE_90).save(os.path.join(src_dir, "rotate", file))

