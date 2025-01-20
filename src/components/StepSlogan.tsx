import { useCallback, useEffect, useState } from 'react';

import SloganImage from '../assets/slogan.png';
import SloganAudio from '../assets/slogan.wav';
import { KEY_NEXT } from '../constant';

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
      style={{
        backgroundImage: `url(${SloganImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
      <iframe
        width="20"
        height="20"
        src="https://www.youtube.com/embed/0hiUuL5uTKc?si=-opWxpoh5Mjfxr7h&start=10&end=25"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: 10,
        }}></iframe>
    </div>
  );
};

export default StepSlogan;
