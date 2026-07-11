import os

search_string = """<div>
          <a href="index.html" class="logo-text">Sunheri Muskan</a>
          <span class="logo-sub">Foundation</span>
        </div>"""

replace_string = """<a href="index.html">
          <img src="assets/images/logo.png" alt="Sunheri Muskan Foundation Logo" style="max-height: 50px;">
        </a>"""

for file in os.listdir('.'):
    if file.endswith('.html'):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = content.replace(search_string, replace_string)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
