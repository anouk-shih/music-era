import CDPlayerImage from '../assets/cd-player.png';
import CDImage from '../assets/cd.webp';

const StepCD = () => {
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img
        src={CDPlayerImage}
        alt="cd player"
        className="w-[600px] h-auto object-cover animate__animated animate__fadeIn absolute bottom-0 right-[10%] z-10"
      />
      <img
        src={CDImage}
        alt="cd"
        className="w-[550px] h-auto object-cover animate__animated animate__fadeInDownBig animate__slow absolute bottom-[13%] right-[10%]"
      />

      <iframe
        src="https://www.youtube.com/embed/Wlc2mS9hMBc?si=AUUjD9T7SlisbxR2&start=19&end=78&autoplay=1"
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay; controls"
        autoFocus
        referrerPolicy="strict-origin-when-cross-origin"
        className="animate__animated animate__fadeIn animate__delay-2s"
        width="1200"
        height="600"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}></iframe>
      <p className="absolute text-4xl text-center text-white micro-5-regular bottom-10">
        {"<-"}
        <span className="ml-20 text-white micro-5-regular">{"->"}</span>
      </p>
    </div>
  );
};

export default StepCD;
