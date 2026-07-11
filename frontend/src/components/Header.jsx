import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src="assets/images/logo.png" alt="Sunheri Muskan Foundation Logo" style={{ maxHeight: '50px' }} />
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/initiatives" className="nav-link">Our Initiatives</Link>
          <Link to="/gallery" className="nav-link">Impact Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/donate" className="btn btn-primary">Donate Now</Link>
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
