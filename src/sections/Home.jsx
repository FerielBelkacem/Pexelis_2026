import { useState } from "react";
import heroTitle from "../assets/decorations/Group 6.png";
import defaultBtn from "../assets/icons/start-btn.png";
import hoverBtn from "../assets/decorations/Group_185.svg";

export default function Home({ setActive }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="window-content home-page">
      <img src={heroTitle} alt="Hero Title" className="hero-img" />

      <div
        className="start-btn"
        onClick={() => setActive("about")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? hoverBtn : defaultBtn} alt="Start Button" />
      </div>
    </div>
  );
}