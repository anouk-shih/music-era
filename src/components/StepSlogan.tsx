import { useCallback, useEffect, useState } from "react";

import SloganImage from "../assets/slogan.png";
import SloganAudio from "../assets/slogan.wav";
import { KEY_NEXT } from "../constant";

const StepSlogan = ({ handleNext }: { handleNext: (e: KeyboardEvent) => void }) => {
  const [step, setStep] = useState(0);

  const handlePlayAudio = () => {
    const audio = new Audio(SloganAudio);
    audio.play();
  };

  // step 1: play audio
  // step 2: next

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key) && step === 1) {
        handleNext(e);
      }
    },
    [handleNext, step]
  );

  useEffect(() => {
    if (step === 0) {
      handlePlayAudio();
      setStep(1);
    }
  }, [step]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="relative grid w-full h-full backdrop-blur-md place-items-center"
      style={{ backgroundImage: `url(${SloganImage})`, backgroundSize: "contain" }}>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepSlogan;
