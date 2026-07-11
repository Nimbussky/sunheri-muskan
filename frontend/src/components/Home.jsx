import React from 'react';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" data-aos="zoom-in" style={{ marginTop: '80px', position: 'relative', background: "linear-gradient(rgba(43, 43, 43, 0.7), rgba(43, 43, 43, 0.7)), url('assets/images/hero_banner_1781538815611.png') center/cover", padding: '120px 0', color: 'white', textAlign: 'center' }}>
        <div className="container animate-up">
          <h1 style={{ color: 'var(--color-secondary)', fontSize: '3.5rem', marginBottom: '20px' }}>Bring Back the Smiles</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.8' }}>
            Empowering communities through education, skill development, social welfare initiatives, and the promotion of self-reliance and dignity.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="donate.html" className="btn btn-primary">Make a Donation</a>
            <a href="about.html" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)' }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" data-aos="fade-down">Our Initiatives</h2>
            <p className="section-subtitle">We focus on holistic development to create a lasting impact on society.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            <div className="card" data-aos="fade-up">
              <img src="assets/images/education_initiative_1781538830903.png" alt="Education" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Education</h3>
                <p>Providing quality education and resources to underprivileged children to build a brighter future.</p>
                <a href="initiatives.html#education" style={{ display: 'inline-block', marginTop: '15px', fontWeight: '600' }}>Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <img src="assets/images/skill_empowerment_1781538847310.png" alt="Skill Empowerment" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Skill Empowerment</h3>
                <p>Equipping youth and adults with vocational skills to enhance employability and confidence.</p>
                <a href="initiatives.html#skills" style={{ display: 'inline-block', marginTop: '15px', fontWeight: '600' }}>Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <img src="assets/images/social_welfare_1781538862985.png" alt="Social Welfare" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Social Welfare</h3>
                <p>Organizing health camps, food distribution, and community support programs for those in need.</p>
                <a href="initiatives.html#welfare" style={{ display: 'inline-block', marginTop: '15px', fontWeight: '600' }}>Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="section-title" data-aos="fade-down">Our Impact So Far</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginTop: '50px' }}>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>5000+</h3>
              <p style={{ fontSize: '1.1rem' }}>Children Educated</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>1200+</h3>
              <p style={{ fontSize: '1.1rem' }}>Youth Empowered</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>50+</h3>
              <p style={{ fontSize: '1.1rem' }}>Health Camps</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>10k+</h3>
              <p style={{ fontSize: '1.1rem' }}>Smiles Brought Back</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary-light)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down" style={{ color: 'var(--color-primary-dark)' }}>Join Us in Making a Difference</h2>
          <p className="section-subtitle" style={{ color: 'var(--color-primary-dark)', marginBottom: '30px' }}>Your support can change lives. Volunteer your time or make a donation today.</p>
          <a href="donate.html" className="btn btn-primary" style={{ marginRight: '15px' }}>Donate Now</a>
          <a href="contact.html" className="btn btn-outline" style={{ borderColor: 'var(--color-primary-dark)', color: 'var(--color-primary-dark)' }}>Become a Volunteer</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
