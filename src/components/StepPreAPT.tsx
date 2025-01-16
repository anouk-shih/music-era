import { useCallback, useEffect, useState } from "react";

import HeyMusic from "../assets/KK_Hey.m4a";
import SpotifyLogo from "../assets/spotify.png";
import { KEY_NEXT } from "../constant";

const StepPreAPT = ({ handleNext }: { handleNext: (e: KeyboardEvent) => void }) => {
  const [step, setStep] = useState(0);

  const handlePlayHey = () => {
    const audio = new Audio(HeyMusic);
    audio.play();
  };

  // step 1: play hey
  // step 2: next

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key)) {
        if (step === 1) {
          handleNext(e);
        }
      }
    },
    [handleNext, step]
  );

  useEffect(() => {
    if (step === 0) {
      setStep(1);
      handlePlayHey();
    }
  }, [step]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img src={SpotifyLogo} alt="spotify" className="w-[600px] h-auto object-cover absolute bottom-[5%] right-[-5%]" />

      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepPreAPT;
