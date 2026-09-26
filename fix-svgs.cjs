const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'public', 'svgs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
for (const file of files) {
  const p = path.join(dir, file);
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('shape-rendering')) {
    c = c.replace('<svg ', '<svg shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" ');
    fs.writeFileSync(p, c);
    console.log('Fixed ' + file);
  }
}
