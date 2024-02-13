import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ServiceCard from "../atoms/card/service";
import Button from "../atoms/button";
import ServiceImage from "../../assets/service_bg.jpg";
import { cardData } from "../../constants";

const Service = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);

  const splitText = (text: string): JSX.Element[] => {
    return text.split("").map((char, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {char}
      </span>
    ));
  };

  const setScrollTriggerAnimation = (
    element: HTMLElement | null,
    delay = 0.3
  ) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 }, // 初期状態: 下からの位置
      {
        opacity: 1,
        y: 0, // 最終状態: 通常の位置
        duration: 0.3,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top bottom+=100", // ビューポートの下部分からの開始
          end: "center center",
          toggleActions: "play none none reset",
        },
      }
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

      if (titleRef.current) {
        Array.from(titleRef.current.childNodes).forEach((char, index) => {
          if (char instanceof HTMLElement) {
            setScrollTriggerAnimation(char, index * 0.1);
          }
        });
      }

      // サービスカードのアニメーション設定
      gsap.utils
        .toArray<HTMLElement>(".service-card")
        .forEach((card, index) => {
          setScrollTriggerAnimation(card, 0.2 + index * 0.2);
        });
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${ServiceImage})`,
        backgroundSize: "cover", // 画像を可能な限り広げて表示
        backgroundAttachment: "fixed", // スクロール時に背景画像を固定
        backgroundPosition: "center center", // 画像を中央に配置
      }}
      className="p-20"
    >
      <div className="text-right whitespace-nowrap">
        <p
          className="font-bold text-3xl text-white font-serif ml-8 mr-5 md:text-7xl"
          ref={titleRef}
        >
          {splitText("Service")}
        </p>
        <div className="mr-16 mt-5">
          <Button text="READ MORE" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-20 my-10">
        {cardData.map((data, index) => (
          <div className="service-card" key={index}>
            <ServiceCard {...data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
