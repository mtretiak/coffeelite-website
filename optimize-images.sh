#!/bin/bash

# Install cwebp if not already installed
if ! command -v cwebp &> /dev/null; then
    echo "Installing cwebp..."
    brew install webp
fi

# Convert and optimize PNG images to WebP
for file in public/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        name="${filename%.*}"
        echo "Converting $filename to WebP..."
        cwebp -q 85 -m 6 -af -f 50 -sharpness 0 -mt -v "$file" -o "public/$name.webp"
    fi
done

echo "Image optimization complete!" 