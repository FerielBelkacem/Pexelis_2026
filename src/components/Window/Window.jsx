import Home from "../../sections/Home"; 
import Picture from "../../sections/Picture"; 
import About from "../../sections/About"; 
import Agenda from "../../sections/Agenda";
import Leaderboard from "../../sections/Leaderboard"; 
import Close from"../../sections/Close";
import VScode from"../../sections/VScode";
import Discord from "../../sections/Discord";
import Sponsors from"../../sections/Sponsors";
import Figma from "../../sections/Figma";
import OMC from "../../sections/OMC";
import "./Window.css"

export default function Window({ active, setActive, onClose, isMobile }) {
  return (
    <div className={`window ${isMobile ? 'mobile' : ''}`}>
      {/* title bar */}
      <div className="title-bar">
        <div className="title"></div>
        <div className="controls">
          <span>—</span>
          <span>□</span>
          <span className="close" onClick={onClose}>×</span>
        </div>
      </div>

      {/* content */}
      <div className="window-content">
        {active === "home" && <Home setActive={setActive} />}
        {active === "picture" && <Picture />}
        {active === "about" && <About />}
        {/*{active === "password" && <Leaderboard />}*/}
        {active === "password" && <Close />}
        {/*{active === "sponsors" && <Sponsors />}*/}
        {active === "sponsors" && <Close />}
        {active === "agenda" && <Agenda />}
        {/*{active === "agenda" && <Close />}*/}
        {active === "figma" && <Figma />}
        {active ==="omc" && <OMC />}
        {active ==="vscode" && <VScode />}
        {active ==="discord" && <Discord />}
      </div>
    </div>
  );
}
