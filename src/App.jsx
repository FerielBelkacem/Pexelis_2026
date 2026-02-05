import { useState, useEffect } from "react";
import Window from "./components/Window/Window";
import Sidebar from "./components/Sidebar/Sidebar";
import footer from "./assets/icons/footer.svg";
import footerMobile from "./assets/decorations/footerMobile.svg";
import omcLogo from "./assets/logo/omc.svg"; // Importez le logo OMC
import useClickSound from "./hooks/useClickSound";
import useFooterSound from "./hooks/useFooterSound";

import "./App.css";

export default function App() {
  useClickSound();
  const playFooterSound = useFooterSound();

  const [activeSection, setActiveSection] = useState("home");
  const [isWindowOpenDesktop, setIsWindowOpenDesktop] = useState(true);
  const [isWindowOpenMobile, setIsWindowOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIconClick = (sectionId) => {
    setActiveSection(sectionId);
    
    if (isMobile) {
      setIsWindowOpenMobile(true);
    } else {
      if (!isWindowOpenDesktop) {
        setIsWindowOpenDesktop(true);
      }
    }
  };

  const closeDesktopWindow = () => {
    setIsWindowOpenDesktop(false);
  };

  const closeMobileWindow = () => {
    setIsWindowOpenMobile(false);
  };

  const handleFooterClick = (e) => {
     playFooterSound();
    if (isMobile && e.clientX < window.innerWidth * 0.3) {
      handleIconClick("about");
    }
  };

  return (
    <div className="app">
      {/* Sidebar - fixe à gauche sur desktop */}
      <div className="sidebar-container">
        <Sidebar
          active={activeSection}
          setActive={handleIconClick}
        />
      </div>

      {/* Zone window pour desktop */}
      {!isMobile && (
        <div className="window-area">
          {isWindowOpenDesktop ? (
            <Window
              active={activeSection}
              setActive={setActiveSection}
              onClose={closeDesktopWindow}
              isMobile={false}
            />
          ) : (
            // Logo OMC qui apparaît quand la fenêtre est fermée sur desktop
            <div className="omc-logo-container">
              <img 
                src={omcLogo} 
                alt="OMC Logo" 
                className="omc-logo"
                onClick={() => setIsWindowOpenDesktop(true)} // Optionnel: rouvrir la fenêtre au clic
              />
            </div>
          )}
        </div>
      )}

      {/* Footer image */}
      <div className="footer-bottom" onClick={handleFooterClick}>
        <img 
          src={isMobile ? footerMobile : footer}
          alt="Footer" 
          className={`footer-image ${isMobile ? 'mobile-footer' : ''}`}
        />
      </div>

      {/* Fenêtre popup pour mobile */}
      {isMobile && isWindowOpenMobile && (
        <div className="mobile-window-overlay">
          <div className="mobile-window-container">
            <Window 
              active={activeSection} 
              setActive={setActiveSection}
              onClose={closeMobileWindow}
              isMobile={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}