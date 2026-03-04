import { useEffect, useRef } from "react";
import css from "./MusicPage.module.css";
import music from "../assets/audio/ghibli_calm_bg_music.mp4";

const MusicPage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {});
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      <div
        className={css.container}
        style={{ textAlign: "center", padding: "40px" }}
      >
        <h1 className={css.musicPagetitle}>🌿 Ghibli Music Room..,</h1>

        <p className={css.frontLine}>Relax and enjoy the forest breeze 🍃</p>

        <audio
          ref={audioRef}
          src={music}
          loop
          autoPlay
        />
      </div>
      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default MusicPage;
