import whatPexelis from "../assets/decorations/T1.png";
import top from "../assets/background/NV-BG 1.png";
import organized from "../assets/about deco/T2.png";
import "../Style/variables.css";
import "../assets/Fonts/WEB/css/clash-display.css";
import phase1 from "../assets/about deco/Phase1.png";
import phase2 from "../assets/about deco/Phase2.png";
import phase1sm from "../assets/about deco/Phase1sm.png";
import phase2sm from "../assets/about deco/Phase2sm.png";
import phas1icon from "../assets/about deco/phas1.svg";
import phas2icon from "../assets/about deco/phas2.svg";
import ready from "../assets/about deco/T4.png";
import omclogo from "../assets/about deco/omclogo.png";
import dino from "../assets/about deco/DINO.png";
import alien from "../assets/about deco/alien.png";
import execut from "../assets/about deco/execut.png";
import omcicon from "../assets/about deco/OMC.png";
import figmalogo from "../assets/about deco/FIGMA.png";
import key from "../assets/about deco/KEY.png";
import aboutus from "../assets/about deco/aboutus.png";
import aboutBg from "../assets/background/v.png";
import linuks from "../assets/about deco/linuks.png";
import omctag from "../assets/about deco/omctag.png";
import footeromc from "../assets/background/Foot.png";

export default function About() {
  const phase1Points = ["UX/UI design", "Branding", "User flows", "Prototyping"];
  const phase2Points = ["Web development", "Implementation", "Performance", "Usability"];

  return (
    <div className="about-page">
      <div className="about-decorations">
        <img src={aboutus} className="decor aboutus" alt="About us" />
        <img src={omctag} className="decor omctag" alt="OMC Tag" />
        <img src={alien} className="decor alien" alt="Alien" />
       
        <img src={omcicon} className="decor omc" alt="OMC Icon" />
        <img src={figmalogo} className="decor figma" alt="Figma Logo" />
        <img src={key} className="decor key" alt="Key" />
        <img src={linuks} className="decor linuks" alt="Linux" />
      </div>

      <div className="about-content">
        <div className="top-img-wrapper">
          <img src={top} className="top-img" alt="Background" />
        </div>
        
        {/* ================= WHAT IS ================= */}
        <section className="about-section">
          <div className="about-title">
            <img
              src={whatPexelis}
              alt="What is Pexelis"
              className="what-pexiles"
            />
          </div>

          <p className="about-text">
            Pexelis is an internal Open Minds Club hackathon that brings
            together <span className="design">designers</span> and
            <span className="dev"> developers</span> in a collaborative and
            hands-on environment.
            <br />
            Over four intense days, participants work through design and
            development challenges to simulate a real-world product workflow,
            from concept to <span className="execut">execution</span>
          </p>
        </section>

        {/* ================= ORGANIZED BY ================= */}
        <section className="about-section">
          <div className="about-title">
            <img src={organized} alt="Organized by" />
          </div>
          <p className="about-text">
            Open Minds Club is a student scientific club at USTHB, founded in
            2009. Its mission is to promote knowledge sharing, collaboration,
            and the open-source mindset among students.
          </p>
        </section>

        {/* ================= PHASES ================= */}
        <section className="phases">
          {/* PHASE 1 */}
          <div className="phase-card purple">
            {/* Icône en haut - PHASE 1 */}
            <div className="phase-icon-wrapper phase1-icon">
              <img src={phas1icon} alt="Phase 1 Icon" className="phase-icon" />
            </div>
            {/* Image de fond - version responsive avec CSS */}
            <div className="phase-image-container">
              {/* Image desktop (visible sur desktop) */}
              <img 
                src={phase1} 
                className="phase-bg-image desktop" 
                alt="Phase 1" 
              />
              {/* Image mobile (visible sur mobile) */}
              <img 
                src={phase1sm} 
                className="phase-bg-image mobile" 
                alt="Phase 1" 
              />
              {/* Texte sur l'image */}
              <div className="phase-overlay-text">
                <h3 className="phase-title">Phase 1 : UI/UX Design Challenge (2 Days)</h3>
                <div className="phase-description">
                  <ul className="phase-points-list">
                    {phase1Points.map((point, index) => (
                      <li key={index} className="phase-point">
                        <span className="point-bullet">•</span>
                        <span className="point-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* PHASE 2 */}
          <div className="phase-card blue">
            {/* Icône en haut - PHASE 2 */}
            <div className="phase-icon-wrapper phase2-icon">
              <img src={phas2icon} alt="Phase 2 Icon" className="phase-icon" />
            </div>
            {/* Image de fond - version responsive avec CSS */}
            <div className="phase-image-container">
              {/* Image desktop (visible sur desktop) */}
              <img 
                src={phase2} 
                className="phase-bg-image desktop" 
                alt="Phase 2" 
              />
              {/* Image mobile (visible sur mobile) */}
              <img 
                src={phase2sm} 
                className="phase-bg-image mobile" 
                alt="Phase 2" 
              />
              {/* Texte sur l'image */}
              <div className="phase-overlay-text">
                <h3 className="phase-title">Phase 2 : Development Challenge (2 Days)</h3>
                <div className="phase-description">
                  <ul className="phase-points-list">
                    {phase2Points.map((point, index) => (
                      <li key={index} className="phase-point">
                        <span className="point-bullet">•</span>
                        <span className="point-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="about-section cta">
          <div className="about-title">
            <img src={ready} alt="Ready to join" />
          </div>
          <p className="Ready-text">
            Be part of an exciting 4-day journey where creativity meets
            technology. Collaborate, innovate, and build something amazing.
          </p>
        </section>
      </div>
      
      <img src={footeromc} className="footer-img" alt="OMC Footer" />
    </div>
  );
}