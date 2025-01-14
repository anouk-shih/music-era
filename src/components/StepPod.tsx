import IPodImage from '../assets/ipod.png';

const StepPod = () => {
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img
        src={IPodImage}
        alt="ipod"
        className="w-[1000px] h-auto object-cover absolute bottom-[-5%] right-[-50%] transform -translate-x-1/2"
      />
      <iframe
        src="https://www.youtube.com/embed/gr5fNKK2FaA?si=2Tt8HiQ2oBFAgEJw&start=13&end=57&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
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

export default StepPod;
