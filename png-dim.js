import fs from 'fs';

function readPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  // PNG signature is 8 bytes, IHDR chunk header is 8 bytes (4 length, 4 type)
  // Width is at offset 16 (4 bytes), Height is at offset 20 (4 bytes)
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`${filePath}: ${width}x${height}`);
}

readPngDimensions('public/media/raj_shamani_title.png');
readPngDimensions('public/media/raj_shamani_desc.png');
