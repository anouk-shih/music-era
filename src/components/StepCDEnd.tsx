import { useCallback, useEffect, useState } from 'react';

import CDImage from '../assets/cd.webp';
import RPGSound from '../assets/rpg-sound.mp3';

interface StepCDEndProps {
  handleNext: (e: KeyboardEvent) => void;
  FoxImage: string;
}

const StepCDEnd = ({ handleNext, FoxImage }: StepCDEndProps) => {
  const [isPlaying, setIsPlaying] = useState(0);

  const handlePlaySound = useCallback(() => {
    const audio = new Audio(RPGSound);
    audio.play();
  }, []);

  const handlePlay = useCallback(
    (step: number) => {
      setIsPlaying(step);
      handlePlaySound();
    },
    [handlePlaySound]
  );

  const handleStart = useCallback(() => {
    handlePlay(1);
    setTimeout(() => {
      handlePlay(2);
    }, 1000);
    setTimeout(() => {
      handlePlay(3);
    }, 2000);
  }, [handlePlay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleStart();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleStart]);

  useEffect(() => {
    window.addEventListener("keydown", handleNext);
    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleNext]);

  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img
        src={FoxImage}
        alt="fox"
        className={`w-[300px] h-auto object-cover absolute top-[0%] left-[50%] z-10 transform-gpu -translate-x-1/2 ${
          isPlaying === 1
            ? "translate-y-[73%]"
            : isPlaying === 2
            ? "translate-y-[142%]"
            : isPlaying === 3
            ? "translate-y-[212%]"
            : ""
        }`}
      />
      <img
        src={CDImage}
        alt="cd"
        className={`w-[160px] h-auto object-cover absolute top-[30%] left-[50%] transform -translate-x-1/2 ${
          isPlaying > 1 ? "hidden" : ""
        }`}
      />
      <img
        src={CDImage}
        alt="cd"
        className={`w-[160px] h-auto object-cover absolute top-[52%] left-[50%] transform -translate-x-1/2 ${
          isPlaying > 2 ? "hidden" : ""
        }`}
      />
      <img
        src={CDImage}
        alt="cd"
        className="w-[160px] h-auto object-cover absolute top-[74%] left-[50%] transform -translate-x-1/2"
      />
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepCDEnd;
