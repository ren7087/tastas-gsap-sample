import WelcomeVideo from "../../assets/welcome.webm";

const Welcome = () => {
  return (
    <div className="relative m-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={WelcomeVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <div className="border-2 border-blue px-4 py-28 font-bold text-3xl rounded-lg text-white">
          ようこそ
          <br />
          デジタル化がもたらすビジネス変革の時代へ
        </div>
      </div>
    </div>
  );
};

export default Welcome;
