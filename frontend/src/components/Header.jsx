import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo-container">
          <a href="index.html">
            <img src="assets/images/logo.png" alt="Sunheri Muskan Foundation Logo" style={{ maxHeight: '50px' }} />
          </a>
        </div>
        
        <nav className="nav-menu">
          <a href="index.html" className="nav-link active">Home</a>
          <a href="about.html" className="nav-link">About Us</a>
          <a href="initiatives.html" className="nav-link">Our Initiatives</a>
          <a href="gallery.html" className="nav-link">Impact Gallery</a>
          <a href="contact.html" className="nav-link">Contact</a>
          <a href="donate.html" className="btn btn-primary">Donate Now</a>
        </nav>
        
        <button className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
