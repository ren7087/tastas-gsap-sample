import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TopImage from "../../assets/top.png";

const Top: React.FC = () => {
  const navbarHeight = 70;
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
      <div
        className="overflow-hidden"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <img
          ref={imageRef}
          src={TopImage}
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
    </div>
  );
};

export default Top;
