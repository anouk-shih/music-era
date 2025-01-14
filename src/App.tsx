import { useCallback, useEffect, useState } from 'react';

import BackgroundImage from './assets/neon-bg.jpg';
import StepAPT from './components/StepAPT';
import StepCD from './components/StepCD';
import StepCDEnd from './components/StepCDEnd';
import StepCover from './components/StepCover';
import StepOkGoogle from './components/StepOkGoogle';
import StepPhone from './components/StepPhone';
import StepPod from './components/StepPod';
import StepPodEnd from './components/StepPodEnd';
import StepTape from './components/StepTape';
import StepTapeEnd from './components/StepTapeEnd';

function App() {
  const [step, setStep] = useState(9);
  const handleSetStep = useCallback(
    (action: "back" | "next") => {
      if (action === "back" && step > 0) {
        setStep(step - 1);
      } else if (action === "next") {
        setStep(step + 1);
      }
    },
    [step]
  );

  const handleBack = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handleSetStep("back");
      }
    },
    [handleSetStep]
  );

  const handleNext = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleSetStep("next");
      }
    },
    [handleSetStep]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleBack);
    window.addEventListener("keydown", handleNext);

    return () => {
      window.removeEventListener("keydown", handleBack);
      window.removeEventListener("keydown", handleNext);
    };
  }, [handleBack, handleNext]);

  return (
    <main
      className="relative grid w-full h-full overflow-hidden place-items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {step === 0 && <StepCover handleSetStep={handleSetStep} />}
      {step === 1 && <StepTape />}
      {step === 2 && <StepTapeEnd />}
      {step === 3 && <StepCD />}
      {step === 4 && <StepCDEnd />}
      {step === 5 && <StepPod />}
      {step === 6 && <StepPodEnd />}
      {step === 7 && <StepPhone />}
      {step === 8 && <StepOkGoogle />}
      {step === 9 && <StepAPT />}
    </main>
  );
}

export default App;
