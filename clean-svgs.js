import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/dusya/OneDrive/Documents/my site final/';
const destDir = 'C:/Users/dusya/OneDrive/Documents/my site final/DUSHYANT_CHEETA_PORTFOLIO/frontend/public/svgs/';
const files = ['showcase.svg', 'showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'];

files.forEach(f => {
  const t = fs.readFileSync(path.join(srcDir, f), 'utf8');
  
  // Find all white paths
  const paths = t.match(/<path[^>]*fill="white"[^>]*>/g);
  
  if (paths && paths.length === 4) {
    // Keep paths[0] and paths[3]. Remove paths[1] and paths[2].
    let cleanT = t.replace(paths[1], '');
    cleanT = cleanT.replace(paths[2], '');
    
    // Save as clean version
    const destFile = path.join(destDir, f.replace('.svg', '-clean.svg'));
    fs.writeFileSync(destFile, cleanT);
    console.log(`Cleaned and saved ${destFile}`);
  } else {
    console.log(`Error: Did not find exactly 4 paths in ${f}`);
  }
});
