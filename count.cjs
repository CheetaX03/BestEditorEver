const fs = require('fs');
const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];
files.forEach(f => {
  const t = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${f}`, 'utf8');
  // Just dump the first few lines to see what paths are there
  console.log(`\n\n--- ${f} ---`);
  const lines = t.split('\n');
  let pathCount = 0;
  lines.forEach(l => {
    if (l.includes('<path')) pathCount++;
  });
  console.log(`Path elements: ${pathCount}`);
});
