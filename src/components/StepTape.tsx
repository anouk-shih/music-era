import { useEffect } from "react";

import RadioImage from "../assets/radio.png";
import TapeImage from "../assets/tape.png";

interface StepTapeProps {
  handleNext: (e: KeyboardEvent) => void;
}

const StepTape = ({ handleNext }: StepTapeProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleNext);
    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleNext]);
  return (
    <div className="relative grid w-full h-full pt-24 align-bottom backdrop-blur-md justify-items-center">
      <img src={RadioImage} alt="radio" className="w-[600px] h-auto object-cover absolute bottom-[10%] right-[0%]" />
      <img
        src={TapeImage}
        alt="tape"
        className="w-[300px] h-auto object-cover animate__animated animate__fadeInDownBig animate__slow absolute bottom-[15%] right-[10%]"
      />
      <iframe
        src="https://www.youtube.com/embed/sGUw3c1piSo?si=B8vjkn9CozkRCCJi&start=210&end=255&autoplay=1"
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay; controls"
        autoFocus
        referrerPolicy="strict-origin-when-cross-origin"
        className="animate__animated animate__fadeIn animate__delay-2s"
        width="1000"
        height="500"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          zIndex: 10,
        }}></iframe>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepTape;
