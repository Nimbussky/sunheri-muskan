import os
import glob
import re

for file in glob.glob('src/components/*.jsx'):
    if 'Home' in file or 'Donate' in file or 'Header' in file or 'Footer' in file:
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove stray header tags
    content = re.sub(r'<main style=\{\{ marginTop: \'80px\' \}\}>.*?</header>', '<main style={{ marginTop: \'80px\' }}>', content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
