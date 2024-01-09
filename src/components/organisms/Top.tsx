import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TokyoImage from "../../assets/tokyo.png";

const Top: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  // テキストを文字ごとに分割する関数の型定義
  const splitText = (text: string): JSX.Element[] => {
    return text.split("").map((char, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {char}
      </span>
    ));
  };

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 9,
        ease: "power2.out",
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      });
    }

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
    <div className="relative">
      <div className="overflow-hidden" style={{ height: `100vh` }}>
        <img
          ref={imageRef}
          src={TokyoImage}
          alt="top"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 font-bold">
        <p className="text-white px-4 text-xl text-center">
          ようこそ、デジタル化がもたらすビジネス変革の時代へ
        </p>
        <p
          ref={titleRef}
          className="text-7xl text-white px-4 py-10 text-center font-serif"
        >
          A {splitText("Digital")} {splitText("Transformation")}
        </p>
        <p className="text-white px-4 text-base text-center">
          AMBCは、デジタル変革の進展に伴う経営とITの最適化を、
          <br />
          <br />
          グローバルな視点から、ご支援いたします。
        </p>
      </div>
      <nav className="absolute top-0 left-0 right-0 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-semibold">
            AMBC
          </a>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                サービス
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                会社概要
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                マネジメントチーム
              </a>
            </li>
            <li>
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

export default Top;
