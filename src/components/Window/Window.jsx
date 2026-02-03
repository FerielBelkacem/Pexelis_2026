import { Minus, Square, X } from 'lucide-react';
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
  
  const handleControlClick = (action) => {
    switch(action) {
      case 'minimize':
        console.log("Minimiser");
        // Vous pouvez ajouter une logique de minimisation ici
        break;
      case 'maximize':
        console.log("Agrandir/Réduire");
        // Vous pouvez ajouter une logique d'agrandissement ici
        break;
      case 'close':
        if (onClose) {
          onClose(); // Appelle la fonction de fermeture passée par App.js
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={`window ${isMobile ? 'mobile' : ''}`}>
      {/* title bar */}
      <div className="title-bar">
        <div className="title"></div>
        <div className="controls">
          {/* Bouton minimiser */}
          <span className="minimize" onClick={() => handleControlClick('minimize')}>
            <Minus size={19} />
          </span>
          
          {/* Bouton agrandir */}
          <span className="cari" onClick={() => handleControlClick('maximize')}>
            <Square size={15} />
          </span>
          
          {/* Bouton fermer */}
          <span className="close" onClick={() => handleControlClick('close')}>
            <X size={18} />
          </span>
        </div>
      </div>

      {/* content */}
      <div className="window-content">
        {active === "home" && <Home setActive={setActive} />}
        {active === "picture" && <Picture />}
        {active === "about" && <About />}
        {active === "password" && <Leaderboard />}
        {/*{active === "password" && <Close />}*/}
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