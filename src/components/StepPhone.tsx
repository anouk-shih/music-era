import { useCallback, useEffect, useState } from 'react';

import PhoneImage from '../assets/google-pixel.png';
import PhoneCallMusic from '../assets/phone-call.m4a';
import RikaRecord from '../assets/Rika_YearEndParty.m4a';

const StepPhone = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handlePlayPhoneCallMusic = () => {
    const audio = new Audio(PhoneCallMusic);
    audio.play();
  };

  const handlePlayRikaRecord = () => {
    const audio = new Audio(RikaRecord);
    audio.play();
  };

  const handleShake = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && !isShaking) {
        setIsShaking(true);
        handlePlayPhoneCallMusic();
      }
      if (e.key === "ArrowDown" && isShaking) {
        setIsShaking(false);
        handlePlayRikaRecord();
      }
    },
    [isShaking]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleShake);
    return () => {
      window.removeEventListener("keydown", handleShake);
    };
  }, [handleShake]);

  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img
        src={PhoneImage}
        alt="phone"
        className={`w-[1000px] h-auto object-cover ${
          isShaking ? "animate__animated animate__shakeX animate__infinite" : ""
        }`}
      />
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepPhone;
