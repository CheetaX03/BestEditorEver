const fs = require('fs');
const path = 'c:/Users/dusya/OneDrive/Documents/my site final/DUSHYANT_CHEETA_PORTFOLIO/frontend/src/components/VideoGallery.tsx';
let content = fs.readFileSync(path, 'utf8');

const newSequence =     videos: [
      { 
        file: "Armoured Beasts.mp4", 
        title: "Armoured Beasts",
        recognition: "This video crossed 700k+ views and over 70k+ likes on Instagram."
      },
      { file: "GT 650.mp4", title: "GT 650" },
      { file: "Im So Into You.mp4", title: "I'm So Into You" },
      { 
        file: "Blend of the Old and New.mov", 
        title: "Blend of the Old and New",
        overview: "A visual piece bringing together two generations of Royal Enfield — a 1999 Bullet and the GT 650. The film explores the contrast between old and new while showing how the character of the machine can carry across generations.",
        concept: "The idea was built around the blend of heritage and modernity — using the older Bullet as a visual connection to the past and the GT 650 as its contemporary counterpart. Rather than treating them as two separate motorcycles, the edit connects their shapes, movement and details to create a single visual narrative.",
        process: "Shot entirely on an iPhone 16 Pro, I approached the piece with a focus on controlled movement, composition and transitions. In post-production, I used Adobe After Effects and 3D camera techniques to create transitions between the two motorcycles, blending physical footage with motion design to make the change between generations feel seamless.",
        roles: ["Director", "Editor", "Cinematography", "Visual Concept", "Motion Design", "Post-Production"],
        applications: ["Adobe After Effects", "Adobe Premiere Pro", "Topaz Labs"]
      },
      { file: "Armoured Truck.mp4", title: "Armoured Truck" }
    ];

const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes('title: "Automotive"')) + 2;
let endIdx = startIdx;
while (!lines[endIdx].includes('id: "05_NCC_AND_DEFENCE"')) {
    endIdx++;
}

lines.splice(startIdx, endIdx - startIdx - 3, newSequence);
fs.writeFileSync(path, lines.join('\n'), 'utf8');
