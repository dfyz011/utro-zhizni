#!/bin/bash

# Source directory
src_dir="./src/content/films"

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

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo apt update
    sudo apt install -y ffmpeg
elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew update
    brew install ffmpeg
fi

# Find all video.mov and video.MOV files in subdirectories and process them
find "$src_dir" -type f \( -name "video.mov" -o -name "video.MOV" \) | while read -r file; do
    # Extract the directory name
    dir_path=$(dirname "$file")
    dir_name=$(basename "$dir_path")

    # Construct source file name
    src_file="$src_dir/$dir_name/video.mov"

    # Construct destination file name
    dest_file="$dest_path/$dir_name-video.mp4"

    echo "Copied $src_file to $dest_file"

    # Copy the file to destination, overwriting if it already exists
    # change tp mp4 and remove audio
    ffmpeg -i "$src_file" -an "$dest_file" < /dev/null
    echo "Copied $src_file to $dest_file"
done

# Write the videos directory path to .env file
echo "PUBLIC_TRAILER_VIDEOS_PATH=$videos_dir" > .env
