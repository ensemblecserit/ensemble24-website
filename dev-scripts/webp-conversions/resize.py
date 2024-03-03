import os
from PIL import Image


src_dir = "./result"

files = os.listdir(src_dir)


i = 1

# Image ratios for the frontend.
port_r = 750 / 1000
land_r = 1600 / 944


for file in files:
	if (not os.path.isfile(os.path.join(src_dir, file))) and (not file.endswith(".webp")):
		continue
	
	src = os.path.join(src_dir, file)

	with Image.open(src) as img:
		width, height = img.size
	
		if(width > height):
			# Landscape
			hc = width / land_r
			y = height - hc
			# Centers the crop
			img.crop((0, y, width, hc + y)).save(os.path.join("result", "crop", file))
			None
		else:
			#Portrait
			hc = width / port_r
			y = height - hc
			img.crop((0, y, width, hc + y)).save(os.path.join("result", "crop", file))
			None

	
	print(file, width, height)


