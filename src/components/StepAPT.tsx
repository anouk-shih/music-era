import { useCallback, useEffect } from 'react';

import SpotifyLogo from '../assets/spotify.png';
import { KEY_NEXT } from '../constant';

const StepAPT = ({ handleNext }: { handleNext: (e: KeyboardEvent) => void }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key)) {
        handleNext(e);
      }
    },
    [handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img src={SpotifyLogo} alt="spotify" className="w-[600px] h-auto object-cover absolute bottom-[5%] right-[-5%]" />
      <iframe
        src="https://www.youtube.com/embed/ekr2nIex040?si=8vQtW6ELCMzTYMya&start=70&end=96&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="animate__animated animate__fadeIn animate__delay-2s"
        width="1000"
        height="500"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          zIndex: 10,
        }}></iframe>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepAPT;
