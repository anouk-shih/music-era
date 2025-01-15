import { useCallback, useEffect, useState } from 'react';

import BackgroundImage from './assets/neon-bg.jpg';
import StepAPT from './components/StepAPT';
import StepCD from './components/StepCD';
import StepCDEnd from './components/StepCDEnd';
import StepCover from './components/StepCover';
import StepEnd from './components/StepEnd';
import StepOkGoogle from './components/StepOkGoogle';
import StepPhone from './components/StepPhone';
import StepPod from './components/StepPod';
import StepPodEnd from './components/StepPodEnd';
import StepTape from './components/StepTape';
import StepTapeEnd from './components/StepTapeEnd';
import { KEY_NEXT } from './constant';

function App() {
  const [step, setStep] = useState(0);
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
      if (e.key === "ArrowLeft") handleSetStep("back");
    },
    [handleSetStep]
  );

  const handleNext = useCallback(
    (e: KeyboardEvent) => {
      if (KEY_NEXT.includes(e.key)) {
        handleSetStep("next");
      }
    },
    [handleSetStep]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleBack);
    // window.addEventListener("keydown", handleNext);

    return () => {
      window.removeEventListener("keydown", handleBack);
      // window.removeEventListener("keydown", handleNext);
    };
  }, [handleBack]);

  return (
    <main
      className="relative grid w-full h-full overflow-hidden place-items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {step === 0 && <StepCover handleNext={handleNext} />}
      {step === 1 && <StepTape handleNext={handleNext} />}
      {step === 2 && <StepTapeEnd handleNext={handleNext} />}
      {step === 3 && <StepCD handleNext={handleNext} />}
      {step === 4 && <StepCDEnd handleNext={handleNext} />}
      {step === 5 && <StepPod handleNext={handleNext} />}
      {step === 6 && <StepPodEnd handleNext={handleNext} />}
      {step === 7 && <StepPhone handleNext={handleNext} />}
      {step === 8 && <StepOkGoogle handleNext={handleNext} />}

      {step === 9 && <StepAPT handleNext={handleNext} />}
      {step === 10 && <StepEnd handleNext={handleNext} />}
    </main>
  );
}

export default App;
