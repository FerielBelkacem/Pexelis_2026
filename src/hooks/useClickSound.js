import { useEffect } from "react";
import clickSound from "../assets/sounds/click.mp3";

export default function useClickSound() {
  useEffect(() => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;

    const playClick = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    document.addEventListener("click", playClick);

    return () => {
      document.removeEventListener("click", playClick);
    };
  }, []);
}
