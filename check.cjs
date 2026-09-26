const fs = require('fs');
['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'].forEach(file => {
  const text = fs.readFileSync(`C:/Users/dusya/OneDrive/Documents/my site final/${file}`, 'utf8');
  const matches = text.match(/<rect.*?rx="20".*?>/g);
  console.log(`${file}:`, matches ? matches.length : 0);
});
