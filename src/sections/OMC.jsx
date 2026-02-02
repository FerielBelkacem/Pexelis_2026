import footeromc from "../assets/background/Foot.png";
import alien2 from "../assets/sposnsors/alien.png";
import squid from "../assets/sposnsors/squid.png";
import fb from "../assets/socialMedia/facebook.png";
import insta from "../assets/socialMedia/insta.png";
import tiktok from "../assets/socialMedia/tiktok.png";
import gmail from "../assets/socialMedia/gmail.png";
import oursocials from "../assets/socialMedia/oursocials.png";
import contact from "../assets/socialMedia/contact.png";
import "../Style/variables.css";

export default function OMC() {
  return (
    <div className="omc-page">
      <div className="omc-content">
        {/* Header Section */}
        <div className="omc-header">
          <img src={alien2} className="deco alien" alt="alien" />
          <div className="title-group">
            <img src={oursocials} className="title-img" alt="Our Socials" />
            <img src={contact} className="contact-btn" />
          </div>
          <img src={squid} className="deco squid" alt="ghost" />
        </div>

        {/* Socials Grid */}
        <div className="socials-grid">
          {/* Instagram */}
          <div className="social-card">
            <img src={insta} alt="Instagram" className="card-bg" />
            <div className="card-info"></div>
          </div>

          {/* Facebook */}
          <div className="social-card">
            <img src={fb} alt="Facebook" className="card-bg" />
          </div>

          {/* TikTok */}
          <div className="social-card">
            <img src={tiktok} alt="TikTok" className="card-bg" />
          </div>

          {/* Gmail */}
          <div className="social-card">
            <img src={gmail} alt="Gmail" className="card-bg" />
          </div>
        </div>
      </div>

      {/* Footer remains as you have it */}
      <img src={footeromc} className="footer-img" alt="OMC Footer" />
    </div>
  );
}
