import { useCallback, useEffect } from 'react';

import SongImageA from '../assets/song1.jpg';
import SongImageB from '../assets/song2.png';
import SongImageC from '../assets/song3.jpg';
import SongImageD from '../assets/song4.png';
import EndImage from '../assets/timeline.jpg';
import { KEY_NEXT } from '../constant';

const StepEnd = ({ handleNext }: { handleNext: (e: KeyboardEvent) => void }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key)) {
        handleNext(e);
      }
    },
    [handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img src={EndImage} alt="end" className="object-cover w-screen h-auto" />
      <img src={SongImageA} alt="song1" className="w-[200px] h-auto object-cover absolute bottom-[12%] left-[7%]" />
      <img src={SongImageB} alt="song2" className="w-[200px] h-auto object-cover absolute bottom-[12%] left-[33%]" />
      <img src={SongImageC} alt="song3" className="w-[200px] h-auto object-cover absolute bottom-[12%] left-[59%]" />
      <img src={SongImageD} alt="song4" className="w-[200px] h-auto object-cover absolute bottom-[12%] left-[81%]" />
    </div>
  );
};

export default StepEnd;
