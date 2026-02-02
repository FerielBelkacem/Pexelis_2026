import spons from "../assets/sposnsors/ourspons.png";
import footeromc from "../assets/background/Foot.png";
import shap1 from "../assets/sposnsors/shape 1.png";
import shap2 from "../assets/sposnsors/shape 2.png";
import shap3 from "../assets/sposnsors/shape 3.png";
import desp1 from "../assets/sposnsors/despShape1.png";
import desp2 from "../assets/sposnsors/despShape2.png";
import desp3 from "../assets/sposnsors/despShape3.png";
import alien2 from "../assets/sposnsors/alien.png";
import squid from "../assets/sposnsors/squid.png";
import deco from "../assets/sposnsors/deco.png";
import support from "../assets/sposnsors/supportus.png";
import "../Style/variables.css";

export default function Sponsors() {
  return (
    <div className="sponsors-page">
      <div className="sponsors-content">
        {/* Title */}
        <img src={spons} className="our-spons" alt="Our Sponsors" />
        <img src={support} className="our-spons support" />

        <div className="spons-deco">
          <img src={squid} className="spons-deco squid" />
          <img src={alien2} className="spons-deco alien2" />
          <img src={deco} className="spons-deco deco" />
        </div>

        {/* Cards */}
        <div className="shapes-container">
          <div className="shape-box purple">
            <img src={shap1} className="shape-img" />
            <img src={desp1} className="desc-img" />
          </div>

          <div className="shape-box blue">
            <img src={shap2} className="shape-img" />
            <img src={desp2} className="desc-img" />
          </div>

          <div className="shape-box red">
            <img src={shap3} className="shape-img" />
            <img src={desp3} className="desc-img" />
          </div>
        </div>
      </div>

      {/* Footer */}

      <img src={footeromc} className="footer-img" alt="OMC Footer" />
    </div>
  );
}
