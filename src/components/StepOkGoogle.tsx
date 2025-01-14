import { useEffect } from 'react';

import HeyMusic from '../assets/KK_Hey.m4a';
import OkGoogleImage from '../assets/okGoogle.png';

const StepOkGoogle = () => {
  const handlePlayHey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      const audio = new Audio(HeyMusic);
      audio.play();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handlePlayHey);
    return () => {
      window.removeEventListener("keydown", handlePlayHey);
    };
  }, []);

  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img src={OkGoogleImage} alt="okGoogle" className="w-[1000px] h-auto object-cover" />
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepOkGoogle;
