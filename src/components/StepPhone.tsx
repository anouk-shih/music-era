import { useCallback, useEffect, useState } from "react";

import PhoneImage from "../assets/google-pixel.png";
import PhoneCallMusic from "../assets/phone-call.m4a";
import RikaRecord from "../assets/Rika_YearEndParty.m4a";
import { KEY_NEXT } from "../constant";

type StepPhoneProps = {
  handleNext: (e: KeyboardEvent) => void;
};

const StepPhone = ({ handleNext }: StepPhoneProps) => {
  const [step, setStep] = useState(0);

  const handlePlayPhoneCallMusic = () => {
    const audio = new Audio(PhoneCallMusic);
    audio.play();
  };

  const handlePlayRikaRecord = () => {
    const audio = new Audio(RikaRecord);
    audio.play();
  };

  // step 1: shake phone and play phone call music
  // step 2: undo shake phone and play rika record
  // step 3: next

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // if (KEY_NEXT.includes(e.key) && step === 0) {
      //   setStep(1);
      //   handlePlayPhoneCallMusic();
      // }
      if (KEY_NEXT.includes(e.key) && step === 1) {
        setStep(2);
        handlePlayRikaRecord();
      }
      if (KEY_NEXT.includes(e.key) && step === 2) {
        handleNext(e);
      }
    },
    [step, handleNext]
  );

  useEffect(() => {
    if (step === 0) {
      setStep(1);
      handlePlayPhoneCallMusic();
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
      <img
        src={PhoneImage}
        alt="phone"
        className={`w-[1000px] h-auto object-cover ${
          step === 1 ? "animate__animated animate__shakeX animate__infinite" : ""
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
