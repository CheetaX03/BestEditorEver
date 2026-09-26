import codecs

filepath = 'c:/Users/dusya/OneDrive/Documents/my site final/DUSHYANT_CHEETA_PORTFOLIO/frontend/src/components/VideoGallery.tsx'
with codecs.open(filepath, 'r', 'utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
inserted = False

for i, line in enumerate(lines):
    if 'id: "03_CINEMATIC_AUTOMOTIVE"' in line:
        new_lines.append(line)
        continue
    
    if 'large: false,' in line and 'id: "03_CINEMATIC_AUTOMOTIVE"' in lines[i-2]:
        new_lines.append(line)
        skip = True
        continue
        
    if skip and 'id: "05_NCC_AND_DEFENCE"' in line:
        skip = False
        new_lines.append(line)
        continue
        
    if skip and not inserted:
        new_lines.append('''    videos: [
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
    ] 
  },
  { 
''')
        inserted = True

    if not skip:
        new_lines.append(line)

with codecs.open(filepath, 'w', 'utf-8') as f:
    f.writelines(new_lines)
