import { useState } from "react";
import Window from "./components/Window/Window";
import Sidebar from "./components/Sidebar/Sidebar";
import footer from "./assets/icons/footer.svg";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const handleIconClick = (sectionId) => {
    if (window.innerWidth <= 768) {
      // Mode mobile : ouvrir le popup
      setSelectedSection(sectionId);
      setIsWindowOpen(true);
    }
    setActiveSection(sectionId);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div className="app">
      {/* Sidebar - toujours présent */}
      <Sidebar
        active={activeSection}
        setActive={handleIconClick}
      />

      {/* Zone window pour desktop */}
      <div className="window-area">
        <Window
          active={activeSection}
          setActive={setActiveSection}
        />
      </div>

      {/* Footer image tout en bas */}
      <div className="footer-bottom">
        <img 
          src={footer} 
          alt="Footer" 
          className="footer-image"
        />
      </div>

      {/* Fenêtre popup pour mobile */}
      {isWindowOpen && (
        <div className="mobile-window-overlay">
          <div className="mobile-window-container">
            <Window 
              active={selectedSection} 
              onClose={closeWindow}
              isMobile={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}