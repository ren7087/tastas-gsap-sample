import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ServiceCard from "../atoms/card/service";
import Button from "../atoms/button";
import ServiceImage from "../../assets/service_bg.jpg";
import { cardDataSP } from "../../constants";

const ServiceSP = () => {
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
    }
  }, []);

  return (
    <div
      className="py-20 bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${ServiceImage})` }}
    >
      <div className="text-right whitespace-nowrap title-text">
        <p
          className="font-bold text-white font-serif mr-10 text-7xl"
          ref={titleRef}
        >
          {splitText("Service")}
        </p>
        <div className="mr-8 mt-3 sm:mr-16 sm:mt-5">
          <Button text="READ MORE" />
        </div>
      </div>
      <div className="px-5">
        {cardDataSP.map((data, index) => (
          <div className="my-10" key={index}>
            <ServiceCard {...data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSP;
