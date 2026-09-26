const fs = require('fs');
['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'].forEach(f => {
  const t = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${f}`, 'utf8');
  console.log(`${f} has phone hand:`, /<rect x="894".*?>/.test(t));
});
