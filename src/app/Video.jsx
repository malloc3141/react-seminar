// Play and pause a video

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  useEffect(()=>{
    if (isPlaying) videoRef.current.play();
    else videoRef.current.pause();
  }, [isPlaying]);
  return (
    <>
      <button onClick={() => {
        setIsPlaying((curr)=>!curr);
      }}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        loop
        playsInline
        ref={videoRef}
      />
    </>
  );
};
