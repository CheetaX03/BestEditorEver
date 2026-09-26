import fs from 'fs';
const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];
files.forEach(f => {
  const t = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${f}`, 'utf8');
  console.log(`\n--- ${f} ---`);
  const matches = t.match(/<rect[^>]*y="4[0-9]{2}"[^>]*>/g);
  if (matches) matches.forEach(m => console.log(m));
});
