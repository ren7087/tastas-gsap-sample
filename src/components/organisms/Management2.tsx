import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Button from "../atoms/button";
import { ManagementTeamData2 } from "../../constants";
import ScrollCard3 from "../molecles/ScrollCard3";
import { useWindowSize } from "../../hooks/useWindowSize";

const Management2 = () => {
  const managementTeamRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const height = useWindowSize();

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
        duration: 0.5,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "center center",
          onEnter: () => console.log("Element entered"),
          onEnterBack: () => console.log("Element entered back"),
          onLeaveBack: () => {
            if (isImage) {
              gsap.to(element, { opacity: 1, duration: 1.5 });
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const managementTeam = managementTeamRef.current;
    // parentNodeが存在することを確認し、型アサーションを使用してnullでないと宣言
    const parent = managementTeam?.parentNode as HTMLElement;

    if (managementTeam && parent) {
      // スペーサー要素を作成
      const spacer = document.createElement("div");
      spacer.style.height = `${managementTeam.offsetHeight}px`;

      ScrollTrigger.create({
        trigger: ".management-team",
        start: "top top",
        end: "bottom",
        onEnter: () => {
          gsap.set(managementTeam, {
            position: "fixed",
            top: 0,
            width: "100%", // 固定された要素の幅を保持
          });
          parent.insertBefore(spacer, managementTeam); // スペーサー要素を挿入
        },
        onLeaveBack: () => {
          gsap.set(managementTeam, { position: "static" });
          if (spacer.parentNode) {
            spacer.parentNode.removeChild(spacer); // スペーサー要素を削除
          }
        },
      });
    }
  }, []);

  return (
    <div className="bg-primaryBG text-white management-team">
      <div className="p-10 flex flex-col  md:flex-row" ref={managementTeamRef}>
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
          激変する社会情勢やグローバル競争の激化、企業間の合従連衡、デジタル変革の進展など、企業を取り巻く事業環境は激しく変化しており、企業はこれら外部の変化に、俊敏かつ柔軟に対応する経営が求められています。
          <br />
          我々AMBCはこれまで、誠実、信頼、謙虚、団結、自由、大胆、そして全力の7つの価値基準に基づき、職務遂行上の基準として意思決定をおこない、我々独自の企業文化をつくって参りました。
          そしてこれからもチーム一同、グローバルな視点からビジネスとテクノロジーの融合を正しく理解し、お客様のデジタル変革をご支援してビジネス成果にご満足いただけるサービスを、俊敏、柔軟かつ確実にご提供すべく、邁進してゆく所存でございます。
          <br />
          皆様のご支援ご鞭撻を賜りますよう、宜しくお願い申し上げます。
        </div>
      </div>
      <div className="max-h-auto pb-10" style={{ height: height && "2000px" }}>
        <ScrollCard3 managementTeam={ManagementTeamData2} />
      </div>
    </div>
  );
};

export default Management2;
