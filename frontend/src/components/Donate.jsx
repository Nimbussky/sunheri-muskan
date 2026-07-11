import React from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <>

      <section className="hero"  style={{ marginTop: '80px', padding: '100px 0', backgroundColor: 'var(--color-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container animate-up">
          <h1 style={{ color: 'var(--color-secondary)', fontSize: '3rem' }}>Make a Donation</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '20px auto 0' }}>Your contribution helps us continue our mission and reach more people in need.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: 1, minWidth: '300px', paddingRight: '20px' }}>
              <h2 className="section-title" >Why Donate?</h2>
              <p style={{ marginBottom: '20px' }}>Every rupee you donate goes directly towards our active initiatives—whether it's providing school supplies to a child, funding a health camp, or empowering a youth with vocational skills.</p>
              <div style={{ backgroundColor: 'var(--color-background)', padding: '25px', borderLeft: '4px solid var(--color-primary)', marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>Transparency Statement</h4>
                <p style={{ fontSize: '0.9rem' }}>We maintain 100% transparency in our funding. Annual reports and impact audits are available upon request for all our donors.</p>
              </div>
              <p>For corporate CSR partnerships or bulk donations, please <Link to="/contact">contact us directly</Link>.</p>
            </div>
            
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div className="card"  style={{ padding: '40px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
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


      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Donate;
