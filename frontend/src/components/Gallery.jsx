import React from 'react';

const Gallery = () => {
  return (
    <main style={{ marginTop: '80px' }}>

  <section className="hero"  >
    <div className="container animate-up">
      <h1 >Impact Gallery</h1>
      <p >Glimpses of the smiles we've helped bring back.</p>
    </div>
  </section>

  <section className="section section-light">
    <div className="container">
      <div >
        <img src="assets/images/hero_banner_1781538815611.png" alt="Community Event"  onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />
        <img src="assets/images/education_initiative_1781538830903.png" alt="Education"  onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />
        <img src="assets/images/skill_empowerment_1781538847310.png" alt="Skill Training"  onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />
        <img src="assets/images/social_welfare_1781538862985.png" alt="Welfare Camp"  onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />
        <img src="assets/images/self_reliance_1781538877035.png" alt="Self Reliance"  onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />
      </div>
      
      <div className="section-header text-center" >
        <h2 className="section-title" >Stories of Change</h2>
      </div>
      <div >
        <div className="card"  >
          <p >"The computer training program completely changed my life. I now have a steady job and can support my family with dignity."</p>
          <h4 >- Rahul S.</h4>
        </div>
        <div className="card"  >
          <p >"The free health camp provided medicines to my elderly mother when we couldn't afford a doctor. We are forever grateful."</p>
          <h4 >- Meena K.</h4>
        </div>
      </div>
    </div>
  </section>

  
    </main>
  );
};

export default Gallery;
