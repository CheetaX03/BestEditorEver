import fs from 'fs';
const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];

files.forEach(f => {
  const t = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${f}`, 'utf8');
  const paths = t.match(/<path[^>]*fill="white"[^>]*>/g) || [];
  console.log(`\n--- ${f} ---`);
  console.log('White paths found:', paths.length);
  paths.forEach((p, i) => console.log(`Path ${i}: length ${p.length}`));
});
