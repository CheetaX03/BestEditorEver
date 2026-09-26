const fs = require('fs');

const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];
files.forEach(file => {
  const text = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${file}`, 'utf8');
  // Extract text elements to see what the titles are
  const titlePaths = text.match(/<path.*?d=".*?".*?fill="white".*?>/g);
  // Just dump a snippet of the file to see what it is
  console.log(`\n\n--- ${file} ---`);
  // Look for text or anything indicating the content
  console.log('Total paths with white fill:', titlePaths ? titlePaths.length : 0);
  
  // Actually, let's just find the text... oh wait, text is converted to paths in the SVG!
  // It's impossible to read the text directly from the paths.
});
