#!/bin/bash

# Source directory
src_dir="src/content/films"

# Find all video.mov and video.MOV files in subdirectories and process them
find "$src_dir" -type f \( -name "video.mov" -o -name "video.MOV" \) | while read -r file; do
    # Function to generate random hash
    generate_hash() {
        cat /dev/urandom | LC_ALL=C tr -dc "a-zA-Z0-9" | fold -w 10 | head -n 1
    }

    # Extract the directory name
    dir_path=$(dirname "$file")
    dir_name=$(basename "$dir_path")

    dest_dir="./public"

    # Generate random hash
    hash=$(generate_hash)

    # Remove previous directory with the pattern *-videos*
    find "$dest_dir" -type d -name "*-videos" -exec rm -rf {} +

    videos_dir="$hash-videos"
    # Construct destination directory path
    dest_path="$dest_dir/$videos_dir"

    mkdir -p "$dest_path"

    # Construct destination file name
    dest_file="$dest_path/$dir_name-video.mov"

    # Copy the file to destination, overwriting if it already exists
    cp -f "$file" "$dest_file"
    echo "Copied $file to $dest_file"

    echo "PUBLIC_TRAILER_VIDEOS_PATH=$videos_dir" > .env
done
