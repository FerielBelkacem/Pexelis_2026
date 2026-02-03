import { useState, useEffect } from "react";
import Window from "./components/Window/Window";
import Sidebar from "./components/Sidebar/Sidebar";
import footer from "./assets/icons/footer.svg";
import footerMobile from "./assets/decorations/footerMobile.svg"; // Importez la version mobile
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isWindowOpenDesktop, setIsWindowOpenDesktop] = useState(true);
  const [isWindowOpenMobile, setIsWindowOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Détecter si on est en mobile
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
          ) : null}
        </div>
      )}

      {/* Footer image - Utilisation conditionnelle selon le device */}
      <div className="footer-bottom">
        <img 
          src={isMobile ? footerMobile : footer} // Image différente selon le device
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