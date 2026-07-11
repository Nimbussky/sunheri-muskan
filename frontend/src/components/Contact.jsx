import React from 'react';

const Contact = () => {
  return (
    <main style={{ marginTop: '80px' }}>

  <section className="hero"  >
    <div className="container animate-up">
      <h1 >Contact Us</h1>
      <p >Have a question or want to volunteer? We'd love to hear from you.</p>
    </div>
  </section>

  <section className="section section-light">
    <div className="container">
      <div >
        <div >
          <h2 className="section-title" >Get in Touch</h2>
          <p >Fill out the form below and our team will get back to you as soon as possible.</p>
          
          <form action="#" method="POST" >
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <select className="form-control" required>
                <option value="">Select a subject...</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="donate">Donation Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" required placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" >Send Message</button>
          </form>
        </div>
        
        <div >
          <div >
            <h3 >Contact Information</h3>
            <div >
              <i className="fas fa-map-marker-alt" ></i>
              <div>
                <strong>Location</strong>
                <p >New Delhi, Delhi, India</p>
              </div>
            </div>
            <div >
              <i className="fas fa-phone" ></i>
              <div>
                <strong>Phone</strong>
                <p >+91 98765 43210</p>
              </div>
            </div>
            <div >
              <i className="fas fa-envelope" ></i>
              <div>
                <strong>Email</strong>
                <p >info@sunherimuskan.org</p>
              </div>
            </div>
            <div >
              <i className="fab fa-instagram" ></i>
              <div>
                <strong>Instagram</strong>
                <p><a href="https://instagram.com/sunheri_muskan" target="_blank">@sunheri_muskan</a></p>
              </div>
            </div>
          </div>
          
          <!-- Map Embed -->
          <div >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192868!2d77.0688975!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1718449629124!5m2!1sen!2sus" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </main>
  );
};

export default Contact;
