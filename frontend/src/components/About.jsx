import React from 'react';

const About = () => {
  return (
    <main style={{ marginTop: '80px' }}>

  <section className="hero"  >
    <div className="container animate-up">
      <h1 >About Us</h1>
      <p >Discover the heart behind Sunheri Muskan Foundation.</p>
    </div>
  </section>

  <section className="section section-light">
    <div className="container">
      <div >
        <div >
          <img src="assets/images/self_reliance_1781538877035.png" alt="Our Story"  />
        </div>
        <div >
          <h2 className="section-title" >Our Story</h2>
          <p >Sunheri Muskan Foundation started with a simple belief: every individual deserves a reason to smile. What began as a small group of passionate volunteers has grown into a structured organization dedicated to community upliftment.</p>
          <p>We work tirelessly to bridge gaps in education, healthcare, and skill development, empowering the underprivileged to build a life of dignity and self-reliance.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section" >
    <div className="container">
      <div >
        <div className="card"  >
          <i className="fas fa-eye" ></i>
          <h3 >Our Vision</h3>
          <p>To create an equitable society where every individual has access to quality education, essential healthcare, and the opportunity to lead a self-reliant life.</p>
        </div>
        <div className="card"  >
          <i className="fas fa-bullseye" ></i>
          <h3 >Our Mission</h3>
          <p>To empower marginalized communities through structured programs in education, skill empowerment, and social welfare, ensuring long-term sustainable impact.</p>
        </div>
      </div>
    </div>
  </section>

  
    </main>
  );
};

export default About;
