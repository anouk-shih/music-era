import { useCallback, useEffect, useState } from 'react';

import EllaImage from '../assets/ella.png';
import HebeImage from '../assets/hebe.png';
import SelinaImage from '../assets/selina.png';
import { KEY_NEXT } from '../constant';

interface StepPodEndProps {
  handleNext: (e: KeyboardEvent) => void;
}

const StepPodEnd = ({ handleNext }: StepPodEndProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const moveHebe = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key)) {
        if (!isPlaying) {
          moveHebe();
        }
        if (isPlaying) {
          handleNext(e);
        }
      }
    },
    [isPlaying, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <div className="flex flex-row items-center">
        <img src={EllaImage} alt="ella" className="w-[195px] h-auto object-cover" />
        <img src={SelinaImage} alt="selina" className="w-[200px] h-auto object-cover" />
        <img
          src={HebeImage}
          alt="hebe"
          className={`w-[200px] h-auto object-cover ${isPlaying ? "animate__animated animate__fadeOutRight" : ""}`}
        />
        <p
          className={`text-5xl text-white absolute top-[55%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 ${
            !isPlaying ? "hidden" : ""
          }`}>
          Hebe 單飛
        </p>
      </div>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepPodEnd;
