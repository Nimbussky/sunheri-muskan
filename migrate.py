import os
import re

legacy_dir = r"C:\Users\SSD\.gemini\antigravity\scratch\sunheri-muskan-foundation\legacy-html"
src_dir = r"C:\Users\SSD\.gemini\antigravity\scratch\sunheri-muskan-foundation\frontend\src\components"

pages = {
    "about.html": "About.jsx",
    "initiatives.html": "Initiatives.jsx",
    "gallery.html": "Gallery.jsx",
    "contact.html": "Contact.jsx"
}

def html_to_jsx(html):
    # Extract just the main content (rough heuristic: find sections or container)
    # The old site likely has <main> or we can just extract everything between <header> and <footer>
    # But since it's raw HTML, let's just grab the body content, excluding header and footer if possible.
    # We know the old site had a navbar and footer.
    
    # Try to find <main> tags
    main_match = re.search(r'<main.*?>(.*?)</main>', html, re.DOTALL | re.IGNORECASE)
    if main_match:
        content = main_match.group(1)
    else:
        # If no main, try to find content between nav/header and footer
        content = html
        content = re.sub(r'.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<footer.*', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'.*?<header.*?</header>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove AOS animations to stop shaking
    content = re.sub(r'data-aos="[^"]*"', '', content)
    content = re.sub(r'data-aos-delay="[^"]*"', '', content)
    
    # Convert class to className
    content = content.replace('class="', 'className="')
    # Convert inline styles (heuristic, might break if complex)
    # We will just remove simple inline styles for safety if they aren't critical, or leave them.
    # Actually, we should fix img and br tags
    content = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', content)
    
    # Fix style attribute (very hacky, better to just remove style tags for now or convert to object)
    # We'll just strip style attributes to avoid React compilation errors, the CSS classes should handle it
    content = re.sub(r'style="[^"]*"', '', content)
    
    # Wrap in a div
    return f"""import React from 'react';

const Component = () => {{
  return (
    <main style={{{{ marginTop: '80px' }}}}>
      {content}
    </main>
  );
}};

export default Component;
"""

for html_file, jsx_file in pages.items():
    with open(os.path.join(legacy_dir, html_file), 'r', encoding='utf-8') as f:
        html = f.read()
    
    jsx = html_to_jsx(html)
    jsx = jsx.replace('Component', jsx_file.replace('.jsx', ''))
    
    with open(os.path.join(src_dir, jsx_file), 'w', encoding='utf-8') as f:
        f.write(jsx)

print("Migration complete!")
