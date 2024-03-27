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

	# with Image.open(src) as img:
	# 	width, height = img.size
	# 	if(width > height):
	# 		# Landscape
	# 		w = 1600
	# 		h = 944
	# 		isLand = "true"
	# 	else:
	# 		#Portrait
	# 		w = 750
	# 		h = 1000
	# 		isLand = "false"
	
	# # The actual conversion to webp
	# os.system(f"cwebp {src} -q 98 -resize {w} {h} -o result/out/{i}.webp -mt -quiet")
	os.system(f"cwebp {src} -q 98 -resize {1000} {750} -o result/out/{i}.webp -mt -quiet")


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
new Photo("20240316_074211.jpg", "REBD001", false),
new Photo("20240316_080610.jpg", "REBD002", false),
new Photo("20240316_082815.jpg", "REBD003", false),
new Photo("20240316_082842.jpg", "REBD004", false),
new Photo("20240316_083019.jpg", "REBD005", false),
new Photo("20240316_083129.jpg", "REBD006", false),
new Photo("20240316_083156.jpg", "REBD007", false),
new Photo("20240316_084645(0).jpg", "REBD008", false),
new Photo("20240316_091931.jpg", "REBD009", false),
new Photo("20240316_091933.jpg", "REBD010", false),
new Photo("20240316_092058.jpg", "REBD011", false),
new Photo("20240316_092228.jpg", "REBD012", false),
new Photo("20240316_092247.jpg", "REBD013", false),
new Photo("20240316_092354.jpg", "REBD014", false),
new Photo("20240316_092406.jpg", "REBD015", false),
new Photo("20240316_092538.jpg", "REBD016", false),
new Photo("20240316_092606.jpg", "REBD017", false),
new Photo("20240316_092836.jpg", "REBD018", false),
new Photo("20240316_093535.jpg", "REBD019", false),
new Photo("20240316_093542.jpg", "REBD020", false),
new Photo("20240316_101124.jpg", "REBD021", false),
"""