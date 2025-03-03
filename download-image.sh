#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download the coffee background image
curl -L "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop" -o public/coffee-bg.jpg 