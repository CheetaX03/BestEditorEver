import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/dusya/OneDrive/Documents/my site final/';
const destDir = 'C:/Users/dusya/OneDrive/Documents/my site final/DUSHYANT_CHEETA_PORTFOLIO/frontend/public/svgs/';

// 1. Fix showcase.svg (Raj Shamani) - Remove Title (1), Desc (2), and View More (3)
let t0 = fs.readFileSync(path.join(srcDir, 'showcase.svg'), 'utf8');
let paths0 = t0.match(/<path[^>]*fill="white"[^>]*>/g);
if (paths0 && paths0.length === 4) {
  t0 = t0.replace(paths0[1], '').replace(paths0[2], '').replace(paths0[3], '');
  fs.writeFileSync(path.join(destDir, 'showcase-fixed.svg'), t0);
  console.log('Fixed showcase.svg');
}

// 2. Fix others (NCC, RE, Kashmir) - Remove ONLY View More (3)
['showcase-1.svg', 'showcase-2.svg', 'showcase-3.svg'].forEach(f => {
  let t = fs.readFileSync(path.join(srcDir, f), 'utf8');
  let paths = t.match(/<path[^>]*fill="white"[^>]*>/g);
  if (paths && paths.length === 4) {
    // Only remove paths[3] (View more)
    t = t.replace(paths[3], '');
    fs.writeFileSync(path.join(destDir, f.replace('.svg', '-fixed.svg')), t);
    console.log(`Fixed ${f}`);
  }
});
