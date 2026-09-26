const fs = require('fs');
const files = ['video elements 1.svg', 'video elements 2.svg', 'video elements 3.svg', 'video elements 4.svg'];
files.forEach(f => {
  const data = fs.readFileSync('public/svgs/Video Elements/' + f, 'utf8');
  console.log('--- ' + f + ' ---');
  let match;
  const regex = /<image[^>]*width="([^"]+)"[^>]*height="([^"]+)"[^>]*x="([^"]+)"[^>]*y="([^"]+)"/g;
  while ((match = regex.exec(data)) !== null) {
    console.log('Image:', match[1], 'x', match[2], 'at', match[3], ',', match[4]);
  }
  const patternRegex = /<pattern[^>]*width="([^"]+)"[^>]*height="([^"]+)"/g;
  while ((match = patternRegex.exec(data)) !== null) {
    console.log('Pattern:', match[1], 'x', match[2]);
  }
});
