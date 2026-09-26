import fs from 'fs';

const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];
files.forEach(f => {
  const t = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${f}`, 'utf8');
  console.log(`\n--- ${f} ---`);
  
  // Find all rects
  const rects = t.match(/<rect[^>]*>/g) || [];
  rects.forEach(r => {
    // Look for anything roughly the size of the phone screen
    if (r.includes('width="20') || r.includes('width="42') || r.includes('height="43') || r.includes('height="17')) {
      console.log(r);
    }
  });
});
