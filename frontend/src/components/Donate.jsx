import React from 'react';

const Donate = () => {
  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <div className="logo-container">
            <a href="/">
              <img src="/assets/images/logo.png" alt="Sunheri Muskan Foundation Logo" style={{ maxHeight: '50px' }} />
            </a>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About Us</a>
            <a href="/initiatives" className="nav-link">Our Initiatives</a>
            <a href="/gallery" className="nav-link">Impact Gallery</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/donate" className="btn btn-primary active">Donate Now</a>
          </nav>
          <button className="menu-toggle"><span></span><span></span><span></span></button>
        </div>
      </header>

      <section className="hero" data-aos="zoom-in" style={{ marginTop: '80px', padding: '100px 0', backgroundColor: 'var(--color-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container animate-up">
          <h1 style={{ color: 'var(--color-secondary)', fontSize: '3rem' }}>Make a Donation</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '20px auto 0' }}>Your contribution helps us continue our mission and reach more people in need.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: 1, minWidth: '300px', paddingRight: '20px' }}>
              <h2 className="section-title" data-aos="fade-down">Why Donate?</h2>
              <p style={{ marginBottom: '20px' }}>Every rupee you donate goes directly towards our active initiatives—whether it's providing school supplies to a child, funding a health camp, or empowering a youth with vocational skills.</p>
              <div style={{ backgroundColor: 'var(--color-background)', padding: '25px', borderLeft: '4px solid var(--color-primary)', marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>Transparency Statement</h4>
                <p style={{ fontSize: '0.9rem' }}>We maintain 100% transparency in our funding. Annual reports and impact audits are available upon request for all our donors.</p>
              </div>
              <p>For corporate CSR partnerships or bulk donations, please <a href="/contact">contact us directly</a>.</p>
            </div>
            
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div className="card" data-aos="fade-up" style={{ padding: '40px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '25px', color: 'var(--color-primary-dark)' }}>Scan & Donate via UPI</h3>
                
                <div style={{ marginBottom: '25px' }}>
                  <img src="/assets/images/upi-qr.png" alt="UPI QR Code" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #eee', padding: '10px', borderRadius: '8px' }} />
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    Please email a screenshot of your payment to <a href="mailto:info@sunherimuskan.org">info@sunherimuskan.org</a> for your tax-exempt receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 2026 Sunheri Muskan Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Donate;
