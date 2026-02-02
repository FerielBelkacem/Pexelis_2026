import "./DesktopIcon.css";

export default function DesktopIcon({ icon, label, active, onClick }) {
  return (
    <div
      className={`desktop-icon ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}
