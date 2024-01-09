import WelcomeVideo from "../../assets/welcome.webm";

const Welcome = () => {
  return (
    <div className="relative" style={{ height: "600px" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={WelcomeVideo} type="video/webm" style={{ border: 0 }} />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <div className="px-20 py-40 font-bold text-right text-6xl rounded-lg text-white">
          <span className="text-5xl pb-3">ようこそ</span>
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
