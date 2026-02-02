import React from "react";
import "../Style/variables.css";
import pic1 from "../assets/pictures/10.png";
import pic2 from "../assets/pictures/1.png";
import pic3 from "../assets/pictures/3.png";
import pic4 from "../assets/pictures/4.png";
import pic5 from "../assets/pictures/5.png";
import pic6 from "../assets/pictures/6.png";
import pic7 from "../assets/pictures/7.png";
import pic8 from "../assets/pictures/1.png";
import title from "../assets/pictures/title.png";
// Your new CSS file
/* Import your club images here */
// import img1 from "../assets/pics/club1.png"
import alien2 from "../assets/sposnsors/alien.png";
import squid from "../assets/sposnsors/squid.png";

export default function Pictures() {
  return (
    <div className="film-page">
      <div className="film-content">
        <div className="title-group">
          <img src={squid} className="pics-deco squid" alt="squid" />
          <img src={title} className="film-title" alt="Pictures Title" />
          <img src={alien2} className="pics-deco alien2" alt="alien" />
        </div>

        <div className="film-strip">
          <div className="film-track">
            <img src={pic1} alt="pic1" />
            <img src={pic2} alt="pic2" />
            <img src={pic3} alt="pic3" />
            <img src={pic4} alt="pic4" />
            <img src={pic5} alt="pic5" />
            <img src={pic6} alt="pic6" />
            <img src={pic7} alt="pic7" />
            <img src={pic8} alt="pic8" />
            {/* Duplicate for seamless loop */}
            <img src={pic1} alt="pic1-loop" />
            <img src={pic2} alt="pic2-loop" />
            <img src={pic3} alt="pic3-loop" />
            <img src={pic4} alt="pic4-loop" />
            <img src={pic5} alt="pic5-loop" />
            <img src={pic6} alt="pic6-loop" />
            <img src={pic7} alt="pic7-loop" />
            <img src={pic8} alt="pic8-loop" />
          </div>
        </div>
      </div>
    </div>
  );
}
