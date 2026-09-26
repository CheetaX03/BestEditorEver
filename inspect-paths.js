import fs from 'fs';
const t = fs.readFileSync('C:/Users/dusya/OneDrive/Documents/my site final/showcase.svg', 'utf8');
const paths = t.match(/<path[^>]*fill="white"[^>]*>/g) || [];
console.log('White paths found:', paths.length);
paths.forEach((p, i) => console.log(`Path ${i}: length ${p.length}`));
