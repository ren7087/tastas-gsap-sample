import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Button from "../atoms/button";
import ScrollCard2 from "../molecles/ScrollCard2";
import { ManagementTeamData2 } from "../../constants";

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
    }
  }, []);

  return (
    <div className="bg-sky-950 text-white p-10 md:p-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-5/12 flex md:block">
          <p
            className="font-bold text-xl md:text-2xl lg:text-6xl font-serif mr-3 mb-4"
            ref={titleRef}
          >
            {splitText("Management")}
            <br />
            {splitText("Team")}
          </p>
          <div className="mt-3 md:mt-7">
            <Button text="READ MORE" />
          </div>
        </div>
        <div className="w-full md:w-8/12 pt-10 md:pt-0 md:pl-8">
          激変する社会情勢やグローバル競争の激化、企業間の合従連衡、
          デジタル変革の進展など、 企業を取り巻く事業環境は激しく変化しており、
          企業はこれら外部の変化に、 俊敏かつ柔軟に対応する経営が求
          められています。
          <br />
          我々AMBCはこれまで、 誠実、 信頼、 謙虚、 団結、 自由、 大胆、
          そして全力の7つの価値基準に基づき、
          職務遂行上の基準として意思決定をおこない、
          我々独自の企業文化をつくって参りました。 そしてこれからもチーム一同、
          グローバルな視点からビジネスとテクノロジーの融合を正しく理解し、 お
          客様のデジタル変革をご支援してビジネス成果にご満足いただけるサービスを、
          俊敏、 柔軟かつ確実に ご提供すべく、 邁進してゆく所存でございます。
          <br />
          皆様のご支援ご鞭撻を賜りますよう、宜しくお願い申し上げます。
        </div>
      </div>
      <div className="max-h-auto mt-10">
        <ScrollCard2 managementTeam={ManagementTeamData2} />
      </div>
    </div>
  );
};

export default Management2;
