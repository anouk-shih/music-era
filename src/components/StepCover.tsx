import { useEffect } from 'react';

interface StepCoverProps {
  handleNext: (e: KeyboardEvent) => void;
}

const StepCover = ({ handleNext }: StepCoverProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleNext);
    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleNext]);

  return (
    <>
      <h1 className="pb-20 text-center text-white whitespace-pre-line jersey-15-regular text-8xl">
        {"Music player \n Evolution"}
      </h1>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">PRESS ENTER TO START_</p>
    </>
  );
};

export default StepCover;
