#!/bin/bash

# Source directory
src_dir="src/content/films"

# Destination directory
dest_dir="./public"

# Function to generate random hash
generate_hash() {
    cat /dev/urandom | LC_ALL=C tr -dc "a-zA-Z0-9" | fold -w 10 | head -n 1
}

# Generate random hash once
hash=$(generate_hash)

# Remove previous directory with the pattern *-videos*
find "$dest_dir" -type d -name "*-videos" -exec rm -rf {} +

videos_dir="$hash-videos"
# Construct destination directory path
dest_path="$dest_dir/$videos_dir"

mkdir -p "$dest_path"

# Find all video.mov and video.MOV files in subdirectories and process them
find "$src_dir" -type f \( -name "video.mov" -o -name "video.MOV" \) | while read -r file; do
    # Extract the directory name
    dir_path=$(dirname "$file")
    dir_name=$(basename "$dir_path")

    # Construct destination file name
    dest_file="$dest_path/$dir_name-video.mov"

    # Copy the file to destination, overwriting if it already exists
    cp -f "$file" "$dest_file"
    echo "Copied $file to $dest_file"
done

# Write the videos directory path to .env file
echo "PUBLIC_TRAILER_VIDEOS_PATH=$videos_dir" > .env
