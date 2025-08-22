#!/bin/bash
# Run this from your project root

for folder in ./public/uploads ./.tmp; do
  if [ -d "$folder" ]; then
    echo "Setting ownership for $folder"
    sudo chown -R 1000:1000 "$folder"
  fi
done