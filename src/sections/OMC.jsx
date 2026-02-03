import footeromc from "../assets/background/Foot.png";
import alien2 from "../assets/sposnsors/alien.png";
import squid from "../assets/sposnsors/squid.png";
import linkdin from "../assets/socialMedia/linkdin.svg";
import insta from "../assets/socialMedia/insta.svg";
import tiktok from "../assets/socialMedia/tiktok.svg";
import gmail from "../assets/socialMedia/gmail.svg";
import oursocials from "../assets/socialMedia/oursocials.png";
import contact from "../assets/socialMedia/contact.png";
import "../Style/variables.css";

export default function OMC() {
  const socialLinks = {
    instagram: "https://www.instagram.com/openmindsclub/",
    linkedin: "https://www.linkedin.com/company/open-minds-club/posts/?feedView=all",
    tiktok: "https://www.tiktok.com/@openmindsclub/",
    gmail: "mailto:openmindsclub@gmail.com"
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="omc-page">
      <div className="omc-content">
        {/* Header Section */}
        <div className="omc-header">
          <img src={alien2} className="deco alien" alt="alien" />
          <div className="title-group">
            <img src={oursocials} className="title-img" alt="Our Socials" />
            <img 
              src={contact} 
              className="contact-btn" 
              alt="Contact" 
              onClick={() => handleSocialClick(socialLinks.gmail)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <img src={squid} className="deco squid" alt="ghost" />
        </div>

        {/* Socials Grid */}
        <div className="socials-grid">
          {/* Instagram */}
          <div 
            className="social-card"
            onClick={() => handleSocialClick(socialLinks.instagram)}
            style={{ cursor: 'pointer' }}
          >
            <img src={insta} alt="Instagram" className="card-bg" />
            <div className="card-info"></div>
          </div>

          {/* LinkedIn */}
          <div 
            className="social-card"
            onClick={() => handleSocialClick(socialLinks.linkedin)}
            style={{ cursor: 'pointer' }}
          >
            <img src={linkdin} alt="LinkedIn" className="card-bg" />
          </div>

          {/* TikTok */}
          <div 
            className="social-card"
            onClick={() => handleSocialClick(socialLinks.tiktok)}
            style={{ cursor: 'pointer' }}
          >
            <img src={tiktok} alt="TikTok" className="card-bg" />
          </div>

          {/* Gmail */}
          <div 
            className="social-card"
            onClick={() => handleSocialClick(socialLinks.gmail)}
            style={{ cursor: 'pointer' }}
          >
            <img src={gmail} alt="Gmail" className="card-bg" />
          </div>
        </div>
      </div>

      {/* Footer remains as you have it */}
      <img src={footeromc} className="footer-img" alt="OMC Footer" />
    </div>
  );
}