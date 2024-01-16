import WelcomeVideo from "../../assets/global.mp4";

const Welcome = () => {
  return (
    <div className="relative" style={{ height: "600px" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        controls={false}
      >
        <source src={WelcomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="px-6 md:px-20 py-10 md:py-40 font-bold text-xl md:text-6xl text-white text-right">
          <span className="inline-block text-lg md:text-5xl pb-3">
            ようこそ
          </span>
          <br />
          デジタル化がもたらす
          <br />
          ビジネス変革の時代へ
        </div>
      </div>
    </div>
  );
};

export default Welcome;
