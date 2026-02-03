import { useState, useEffect } from "react";
import Window from "./components/Window/Window";
import Sidebar from "./components/Sidebar/Sidebar";
import footer from "./assets/icons/footer.svg";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isWindowOpenDesktop, setIsWindowOpenDesktop] = useState(true); // TRUE pour desktop (ouvert par défaut)
  const [isWindowOpenMobile, setIsWindowOpenMobile] = useState(false); // FALSE pour mobile (fermé par défaut)
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
      // Mode mobile : ouvrir le popup
      setIsWindowOpenMobile(true);
    } else {
      // Mode desktop : s'assurer que la fenêtre est ouverte
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

      {/* Zone window pour desktop - SEULEMENT si ouverte */}
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
            null
          )}
        </div>
      )}

      {/* Footer image tout en bas */}
      <div className="footer-bottom">
        <img 
          src={footer} 
          alt="Footer" 
          className="footer-image"
        />
      </div>

      {/* Fenêtre popup pour mobile - SEULEMENT si ouverte */}
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