import { useRef } from "react";
import footerSound from "../assets/sounds/start-click.mp3";

export default function useFooterSound() {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(footerSound);
    audioRef.current.volume = 0.45; // tweak as you like
  }

  const playFooterSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return playFooterSound;
}
