import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import TokyoVideo from "../../assets/tokyo.mp4";

gsap.registerPlugin(CSSPlugin);

const Top2: React.FC = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);

  const splitText = (text: string): JSX.Element[] => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char}
      </span>
    ));
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.childNodes.forEach((char, i) => {
        gsap.fromTo(
          char,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            delay: i * 0.1, // 0.1秒ごとに順に表示
          }
        );
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        controls={false}
      >
        <source src={TokyoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 font-bold px-4">
        <p className="text-white text-center text-lg sm:text-xl md:text-2xl">
          ようこそ、デジタル化がもたらすビジネス変革の時代へ
        </p>
        <div
          ref={titleRef}
          className="text-white text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 py-10"
        >
          A {splitText("Digital")} {splitText("Transformation")}
        </div>
        <p className="text-white text-center text-sm sm:text-base md:text-lg">
          AMBCは、デジタル変革の進展に伴う経営とITの最適化を、
          <br className="hidden sm:block" />
          グローバルな視点から、ご支援いたします。
        </p>
      </div>
      <nav className="absolute top-0 left-0 right-0 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-semibold">
            AMBC
          </a>
          <ul className="flex font-bold justify-end items-center space-x-4 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6 w-full">
            <li className="hidden sm:block">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                サービス
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                会社概要
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                マネジメントチーム
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                ENGLISH
              </a>
            </li>
            <li>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-4 py-2">
                お問い合わせ
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Top2;
