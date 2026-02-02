import heroTitle from "../assets/decorations/Group 6.png";
import button from "../assets/icons/start-btn.png";

export default function Home({ setActive }) {
  return (
    <div className="window-content home-page">
      <img src={heroTitle} alt="Hero Title" className="hero-img" />

      <div className="start-btn" onClick={() => setActive("about")}>
        <img src={button} alt="Start Button" />
      </div>
    </div>
  );
}
