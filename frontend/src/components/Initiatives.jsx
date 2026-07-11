import React from 'react';

const Initiatives = () => {
  return (
    <main style={{ marginTop: '80px' }}>

  <section className="hero"  >
    <div className="container animate-up">
      <h1 >Our Initiatives</h1>
      <p >Driving change through structured, impactful programs.</p>
    </div>
  </section>

  <section id="education" className="section section-light">
    <div className="container">
      <div >
        <div >
          <img src="assets/images/education_initiative_1781538830903.png" alt="Education"  />
        </div>
        <div >
          <h2 className="section-title" >Education Programs</h2>
          <p>We believe education is the most powerful tool for social transformation. Our education initiatives focus on providing free tutoring, school supplies, and digital literacy to children from low-income families.</p>
          <ul >
            <li>After-school learning centers</li>
            <li>Scholarship distributions</li>
            <li>Digital classrooms setup</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" className="section" >
    <div className="container">
      <div >
        <div >
          <h2 className="section-title" >Skill Empowerment</h2>
          <p>We run vocational training programs that equip young adults and women with practical skills, enabling them to secure employment or start their own small businesses.</p>
          <ul >
            <li>Computer operation and basic coding</li>
            <li>Tailoring and handicraft workshops</li>
            <li>Communication and soft skills training</li>
          </ul>
        </div>
        <div >
          <img src="assets/images/skill_empowerment_1781538847310.png" alt="Skill Empowerment"  />
        </div>
      </div>
    </div>
  </section>

  <section id="welfare" className="section section-light">
    <div className="container">
      <div >
        <div >
          <img src="assets/images/social_welfare_1781538862985.png" alt="Social Welfare"  />
        </div>
        <div >
          <h2 className="section-title" >Social Welfare & Health</h2>
          <p>Our commitment to overall well-being involves organizing regular health camps, distributing essential food supplies during crises, and providing hygiene awareness sessions.</p>
          <ul >
            <li>Free medical checkups and eye camps</li>
            <li>Menstrual hygiene awareness</li>
            <li>Winter clothes distribution drives</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
    </main>
  );
};

export default Initiatives;
