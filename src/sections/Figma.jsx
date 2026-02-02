import "../Style/figma.css";

// Dummy icons — replace with real SVGs if you have them
import FileIcon from "../assets/icons/file.svg";
import EditIcon from "../assets/icons/edit.svg";
import ViewIcon from "../assets/icons/view.svg";
import HelpIcon from "../assets/icons/help.svg";
import FrameIcon from "../assets/icons/frame.svg";
import RectangleIcon from "../assets/icons/rectangle.svg";
import TextIcon from "../assets/icons/text.svg";

export default function Figma() {
  return (
    <div className="figma-window">
      {/* Top Toolbar */}
      <div className="figma-topbar">
        <button>
          <img src={FileIcon} alt="File" /> File
        </button>
        <button>
          <img src={EditIcon} alt="Edit" /> Edit
        </button>
        <button>
          <img src={ViewIcon} alt="View" /> View
        </button>
        <button>
          <img src={HelpIcon} alt="Help" /> Help
        </button>
        <div className="figma-title">Untitled Design</div>
      </div>

      {/* Main Area */}
      <div className="figma-main">
        {/* Left Panel (Layers) */}
        <div className="figma-leftpanel">
          <h3>Layers</h3>
          <ul>
            <li>
              <img src={FrameIcon} alt="Frame" /> Frame 1
            </li>
            <li>
              <img src={RectangleIcon} alt="Rectangle" /> Rectangle
            </li>
            <li>
              <img src={TextIcon} alt="Text" /> Text
            </li>
            <li>
              <img src={FrameIcon} alt="Frame" /> Frame 2
            </li>
          </ul>
        </div>

        {/* Canvas */}
        <div className="figma-canvas">
          <div className="artboard">
            <div className="rectangle">Rectangle</div>
            <div className="text">Text Layer</div>
          </div>
        </div>

        {/* Right Panel (Properties) */}
        <div className="figma-rightpanel">
          <h3>Properties</h3>
          <p>Width: 200px</p>
          <p>Height: 100px</p>
          <p>Color: #FF5733</p>
        </div>
      </div>
    </div>
  );
}
