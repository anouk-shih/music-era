import { useCallback, useEffect } from 'react';

interface StepCoverProps {
  handleSetStep: (action: "back" | "next") => void;
}

const StepCover = ({ handleSetStep }: StepCoverProps) => {
  const handleEnter = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSetStep("next");
      }
    },
    [handleSetStep]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [handleEnter]);

  return (
    <>
      <h1 className="pb-20 text-center text-white whitespace-pre-line jersey-15-regular text-8xl">
        {"Music player \n Evolution"}
      </h1>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">PRESS ENTER TO START_</p>
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
        }}></iframe>
    </>
  );
};

export default StepCover;
