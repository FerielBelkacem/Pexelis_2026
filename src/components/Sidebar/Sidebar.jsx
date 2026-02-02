import { desktopItems } from "../../data/desktopItems";
import DesktopIcon from "../DesktopIcon/DesktopIcon";

export default function Sidebar({ active, setActive }) {
  // Filtrer les éléments à masquer sur mobile
  const filteredItems = desktopItems.filter(item => {
    // Si on est sur mobile (window.innerWidth <= 768)
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      // Ne pas inclure ces IDs sur mobile
      const hiddenOnMobile = ["home"];
      return !hiddenOnMobile.includes(item.id);
    }
    return true;
  });

  return (
    <aside className="sidebar">
      {filteredItems.map((item) => (
        <DesktopIcon
          key={item.id}
          icon={item.icon}
          label={item.label}
          active={active === item.id}
          onClick={() => setActive(item.id)}
        />
      ))}
    </aside>
  );
}