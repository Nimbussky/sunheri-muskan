import os

aos_css = '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">'
aos_js = '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>\n  <script>AOS.init({duration: 800, once: true, offset: 100});</script>'

for file in os.listdir('.'):
    if file.endswith('.html'):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add CSS
        if 'aos.css' not in content:
            content = content.replace('</head>', f'  {aos_css}\n</head>')
        
        # Add JS
        if 'aos.js' not in content:
            content = content.replace('</body>', f'  {aos_js}\n</body>')
        
        # Add data-aos attributes
        content = content.replace('class="card"', 'class="card" data-aos="fade-up"')
        content = content.replace('class="section-title"', 'class="section-title" data-aos="fade-down"')
        content = content.replace('class="hero"', 'class="hero" data-aos="zoom-in"')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
