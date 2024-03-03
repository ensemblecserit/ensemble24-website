import os
from PIL import Image

src_dir = "./result"

files = os.listdir(src_dir)

fileNames = []

i = 1
for file in files:
	isLand = "false"
	if (not os.path.isfile(os.path.join(src_dir, file))) and (not file.endswith(".webp")):
		continue
	
	src = os.path.join(src_dir, file)

	with Image.open(src) as img:
		width, height = img.size
		if(width > height):
			# Landscape
			w = 1600
			h = 944
			isLand = "true"
		else:
			#Portrait
			w = 750
			h = 1000
			isLand = "false"
	
	# The actual conversion to webp
	os.system(f"cwebp {src} -q 98 -resize {w} {h} -o result/out/{i}.webp -mt -quiet")

	fileNames.append((file, isLand, i))
	print(f"{file} completed...")

	i += 1

def convert_to_padded_string(num):
    return '{:03d}'.format(num)

# Prints the image array with all the necessary data
txt = ""
# [(file, isLand, index) ...]
for file in fileNames:
	# new Photo("19.webp", "INAUG019", false),
	txt += f"""new Photo("{file[0]}", "REBD{convert_to_padded_string(file[2])}", {file[1]}),\n"""

print(txt)

"""
new Photo("1.webp", "REBD001", false),
new Photo("10.webp", "REBD002", false),
new Photo("11.webp", "REBD003", false),
new Photo("12.webp", "REBD004", false),
new Photo("13.webp", "REBD005", false),
new Photo("14.webp", "REBD006", false),
new Photo("15.webp", "REBD007", false),
new Photo("16.webp", "REBD008", true),
new Photo("17.webp", "REBD009", true),
new Photo("18.webp", "REBD010", false),
new Photo("19.webp", "REBD011", true),
new Photo("2.webp", "REBD012", false),
new Photo("20.webp", "REBD013", false),
new Photo("21.webp", "REBD014", false),
new Photo("22.webp", "REBD015", false),
new Photo("23.webp", "REBD016", false),
new Photo("24.webp", "REBD017", false),
new Photo("25.webp", "REBD018", false),
new Photo("26.webp", "REBD019", true),
new Photo("27.webp", "REBD020", true),
new Photo("28.webp", "REBD021", true),
new Photo("29.webp", "REBD022", false),
new Photo("3.webp", "REBD023", false),
new Photo("30.webp", "REBD024", true),
new Photo("31.webp", "REBD025", false),
new Photo("32.webp", "REBD026", true),
new Photo("33.webp", "REBD027", true),
new Photo("34.webp", "REBD028", true),
new Photo("4.webp", "REBD029", true),
new Photo("5.webp", "REBD030", true),
new Photo("6.webp", "REBD031", false),
new Photo("7.webp", "REBD032", false),
new Photo("8.webp", "REBD033", false),
new Photo("9.webp", "REBD034", false),
"""