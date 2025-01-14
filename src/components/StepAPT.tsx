import SpotifyLogo from '../assets/spotify.png';

const StepAPT = () => {
  return (
    <div className="relative grid w-full h-full backdrop-blur-md place-items-center">
      <img src={SpotifyLogo} alt="spotify" className="w-[600px] h-auto object-cover absolute bottom-[10%] right-[0%]" />
      <iframe
        src="https://www.youtube.com/embed/ekr2nIex040?si=8vQtW6ELCMzTYMya&start=70&end=96&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="animate__animated animate__fadeIn animate__delay-2s"
        width="1200"
        height="600"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}></iframe>
    </div>
  );
};

export default StepAPT;
