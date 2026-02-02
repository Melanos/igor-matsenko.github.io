from PIL import Image
import numpy as np

# Open the image
img = Image.open('company_logo.png').convert('RGBA')
data = np.array(img)

# Get the RGB values (ignore alpha for now)
rgb = data[:, :, :3]
# Create a mask for white pixels (or near-white)
# You can adjust the threshold (240) to be more/less aggressive
white_threshold = 240
mask = np.all(rgb > white_threshold, axis=2)

# Set alpha channel to 0 (transparent) for white pixels
data[mask, 3] = 0

# Create new image
result = Image.fromarray(data)
result.save('company_logo_transparent.png')
print("✅ Saved as company_logo_transparent.png with transparent background!")
