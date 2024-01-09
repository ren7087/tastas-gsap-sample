import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ManagementCard from "../atoms/card/management";
import Button from "../atoms/button";

const Management2 = () => {
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
    delay = 0.3,
    isImage = false
  ) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "center center",
          onEnter: () => console.log("Element entered"),
          onEnterBack: () => console.log("Element entered back"),
          onLeaveBack: () => {
            if (isImage) {
              gsap.to(element, { opacity: 0, duration: 1.5 });
            }
          },
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

      // Create staggered animation for ManagementCard
      gsap.utils
        .toArray<HTMLElement>(".management-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              delay: 0.5 + index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "center center",
                onEnter: () => console.log("Element entered"),
                onEnterBack: () => console.log("Element entered back"),
                toggleActions: "play none none reset",
              },
            }
          );
        });
    }
  }, []);

  const cardData = [
    {
      position1: "代表取締役",
      position2: "最高経営責任者 CEO",
      name: "瀬賀 利明Toshiaki SEGA",
      marginTop: 20,
    },
    {
      position1: "執行役員",
      position2: "最高技術責任者 CTO",
      name: "市川 至Itaru ICHIKAW",
      marginTop: 70,
    },
    {
      position1: "執行役員",
      position2: "最高執行責任者 COO",
      name: "鍋田 正行Masayuki NABETA",
      marginTop: 0,
    },
    {
      position1: "執行役員",
      position2: "最高品質責任者 CQO",
      name: "久米 恵美Emi KUME",
      marginTop: 70,
    },
  ];

  return (
    <>
      <div className="flex whitespace-nowrap">
        <p className="font-bold text-3xl ml-8 mr-5 md:text-7xl" ref={titleRef}>
          {splitText("Management Team")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-10 md:mx-20">
        {cardData.map((data, index) => (
          <div className="management-card" key={index}>
            <ManagementCard {...data} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button text="Read More >" />
      </div>
    </>
  );
};

export default Management2;
