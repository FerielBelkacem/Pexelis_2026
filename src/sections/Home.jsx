import { useRef } from "react";
import heroTitle from "../assets/decorations/Group 6.png";
import defaultBtn from "../assets/icons/start-btn.png";
import startSound from "../assets/sounds/start-click.mp3";

export default function Home({ setActive }) {

  // 🎵 sound instance (created once)
  const clickSound = useRef(new Audio(startSound));

  const handleClick = () => {
    clickSound.current.currentTime = 0; // restart sound
    clickSound.current.volume = 0.4;    // adjust volume
    clickSound.current.play();

    setActive("about");
  };

  return (
    <div className="window-content home-page">
      <img src={heroTitle} alt="Hero Title" className="hero-img" />

      <div
        className="start-btn"
        onClick={handleClick}
      >
        <img src={defaultBtn} alt="Start Button" />
      </div>
    </div>
  );
}
