import "../Style/variables.css";
import title from "../assets/pictures/Title.png";
// Your new CSS file
/* Import your club images here */
// import img1 from "../assets/pics/club1.png"
import alien2 from "../assets/sposnsors/alien.png";
import squid from "../assets/sposnsors/squid.png";

const images = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.webp",
];


export default function Pictures() {
  return (
    <div className="film-page">
      <div className="film-content">
        <div className="title-group">
          <img src={squid} className="pics-deco squid" alt="squid" />
          <img src={title} className="film-title" alt="Pictures Title" />
          <img src={alien2} className="pics-deco alien2" alt="alien" />
        </div>

        <div className="film-strip">
        <div className="film-track">
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              decoding="async"
              alt="OMC Moments"
            />
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
