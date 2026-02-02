import whatPexelis from "../assets/decorations/T1.png";
import top from "../assets/background/NV-BG 1.png";
import organized from "../assets/about deco/T2.png"
import "../Style/variables.css";
import "../assets/Fonts/WEB/css/clash-display.css";
import phase1 from "../assets/about deco/Phase 1.png"
import phase2 from "../assets/about deco/Phase 2.png"
import ready from "../assets/about deco/T4.png"
import omclogo from "../assets/about deco/omclogo.png"
import dino from "../assets/about deco/DINO.png"
import alien from "../assets/about deco/alien.png"
import execut from "../assets/about deco/execut.png"
import omcicon from "../assets/about deco/OMC.png"
import figmalogo from "../assets/about deco/FIGMA.png"
import key from "../assets/about deco/KEY.png"
import aboutus from "../assets/about deco/aboutus.png"
import aboutBg from "../assets/background/v.png"
import linuks from "../assets/about deco/linuks.png"
import omctag from "../assets/about deco/omctag.png"
import footeromc from "../assets/background/foot.png"
export default function About() {
  return (
    
      
    
      <div className="about-page">
    
        <div className="about-decorations">
         <img src={aboutus} className=" decor aboutus"/>
         <img src={omctag} className=" decor omctag"/>
         <img src={alien} className="decor alien"/>
         <img src={execut} className="decor execution"/>
         <img src={omcicon} className="decor omc"/>
        <img src={figmalogo} className="decor figma"/>
         <img src={key} className="decor key"/>
         <img src={linuks} className="decor linuks"/>
        </div>

        <div className="about-content">
          <div className="top-img-wrapper">
            <img src={top} className="top-img"/>
          </div>
          {/* ================= WHAT IS ================= */}
          <section className="about-section">
            <div className="about-title">
              <img src={whatPexelis} alt="What is Pexelis" className="what-pexiles"/>
            </div>

            <p className="about-text">
              Pexelis is an internal Open Minds Club hackathon that brings
              together <span className="design">designers</span> and
              <span className="dev"> developers</span> in a collaborative and
              hands-on environment.
              <br />
              Over four intense days, participants work through design and
              development challenges to simulate a real-world product workflow,
              from concept to 
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
           
            <div className="phase-card purple">
              <img src={phase1} className="phase-1" />
            </div>
             <br /><br />
            <div className="phase-card blue">
              <img src={phase2} className="phase-2" />
              
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
            
            
          <br /><br />
          </section>
          
            
             
              
            

        </div>
        <br /><br /><br />
        <img src={footeromc} className="footer-img" alt="OMC Footer" />
      </div>
    
  );
}
