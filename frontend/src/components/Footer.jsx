import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Sunheri Muskan Foundation</h3>
            <p>Bring Back the Smiles. We are committed to empowering communities and spreading joy through dedicated social work.</p>
            <div className="social-links">
              <a href="https://instagram.com/sunheri_muskan" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <Link to="/about">About Us</Link>
            <Link to="/initiatives">Our Initiatives</Link>
            <Link to="/gallery">Impact Gallery</Link>
            <Link to="/donate">Donate</Link>
          </div>
          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> New Delhi, India</p>
            <p><i className="fas fa-envelope"></i> info@sunherimuskan.org</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Sunheri Muskan Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
