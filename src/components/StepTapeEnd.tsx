import { useEffect } from "react";

import KimImage from "../assets/kim.jpg";

interface StepTapeEndProps {
  handleNext: (e: KeyboardEvent) => void;
}

const StepTapeEnd = ({ handleNext }: StepTapeEndProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleNext);
    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleNext]);
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img
        src={KimImage}
        alt="kim"
        className="w-[800px] h-auto object-cover animate__animated animate__fadeInDownBig"
      />
      <h2 className="w-[800px] p-5 text-center text-white bg-black jersey-15-regular text-8xl absolute top-[55%] left-1/2 transform -translate-x-1/2 animate__animated animate__fadeIn animate__delay-3s">
        卡帶刪
      </h2>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepTapeEnd;
