import fs from 'fs';
const t = fs.readFileSync('C:/Users/dusya/OneDrive/Documents/my site final/showcase-1.svg', 'utf8');
const rects = t.match(/<rect[^>]*rx="2[89]"[^>]*>/g) || [];
rects.forEach(r => console.log(r));
