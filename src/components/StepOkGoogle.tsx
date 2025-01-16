import { useEffect } from "react";

import OkGoogleImage from "../assets/okGoogle.png";

type StepOkGoogleProps = {
  handleNext: (e: KeyboardEvent) => void;
};

const StepOkGoogle = ({ handleNext }: StepOkGoogleProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleNext);
    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleNext]);

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
