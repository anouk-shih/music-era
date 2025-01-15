import { useCallback, useEffect, useState } from 'react';

import HeyMusic from '../assets/KK_Hey.m4a';
import OkGoogleImage from '../assets/okGoogle.png';
import { KEY_NEXT } from '../constant';

type StepOkGoogleProps = {
  handleNext: (e: KeyboardEvent) => void;
};

const StepOkGoogle = ({ handleNext }: StepOkGoogleProps) => {
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
        if (step === 0) {
          setStep(1);
          handlePlayHey();
        }
        if (step === 1) {
          handleNext(e);
        }
      }
    },
    [handleNext, step]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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
