import fs from 'fs';

const t1 = fs.readFileSync('C:/Users/dusya/OneDrive/Documents/my site final/showcase-1.svg', 'utf8');
const t3 = fs.readFileSync('C:/Users/dusya/OneDrive/Documents/my site final/showcase-3.svg', 'utf8');

console.log("--- showcase-1 ---");
t1.match(/<rect[^>]*>/g)?.forEach(r => {
  if (r.includes('fill="url(') && !r.includes('169')) console.log(r.substring(0, 100));
});

console.log("--- showcase-3 ---");
t3.match(/<rect[^>]*>/g)?.forEach(r => {
  if (r.includes('fill="url(') && !r.includes('169')) console.log(r.substring(0, 100));
});
