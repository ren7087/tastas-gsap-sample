import React from "react";
import ServiceCard from "../atoms/card/service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Service2 = () => {
  const titleRef = React.useRef<HTMLParagraphElement>(null);

  // テキストを文字ごとに分割する関数の型定義
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
              // スクロールバック時に画像をフェードアウト
              gsap.to(element, { opacity: 0, duration: 1.5 });
            }
          },
          toggleActions: "play none none reset", // toggleActionsを変更
        },
      }
    );
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

      if (titleRef.current) {
        // titleRefの各文字に対してスクロールトリガーアニメーションを設定
        Array.from(titleRef.current.childNodes).forEach((char, index) => {
          if (char instanceof HTMLElement) {
            setScrollTriggerAnimation(char, index * 0.1);
          }
        });
      }
    }
  }, []);

  const cardData = [
    {
      title1: "コンサルティングサービス",
      title2: "経営戦略・事業戦略",
      description: `デジタル変革の果実を先取りして企業価値最大化と競争優位性を確立する経営戦略・事業戦略の策定と、戦略の具体化に向けた施策の定義と実行計画の作成をご支援することで、企業の変革をともに成し遂げます。`,
      marginTop: 190,
    },
    {
      title1: "コンサルティングサービス",
      title2: "ソリューション導入",
      description: `ビジネスとテクノロジーの融合を正しく理解し、変革に伴うリスクを管理しつつ、ビジネス成果を迅速かつ確実に実現するソリューションを確実にお届け致します。`,
      marginTop: 110,
    },
    {
      title1: "コンサルティングサービス",
      title2: "BPR、チェンジマネジメント",
      description: `リーダーシップ、コミュニケーション他の戦略理論を組み合わせ、デジタル変革のためのBPRとチェンジマネジメントを着実に実装いたします。`,
      marginTop: 30,
    },
    {
      title1: "コンサルティングサービス",
      title2: "M&A、企業価値評価",
      description: `専門性の高いコンサルタントが顧客企業の全体像を見据え、顧客企業の立場にたったプロジェクト推進をおこない、プロジェクトを確実に成功へと導きます`,
      marginTop: 30,
    },
    {
      title1: "ITサービス",
      title2: "ITシステム開発",
      description: `オブジェクト指向型ソフトウェア開発に関わる業界最高レベルの技術知識と、多種多様な業界に関わる業務知見を駆使することで、ITシステムの開発をご支援いたします。`,
      marginTop: -50,
    },
  ];

  return (
    <>
      <div className="flex whitespace-nowrap mt-10">
        <p className="font-bold text-3xl ml-8 mr-5 md:text-7xl" ref={titleRef}>
          {splitText("Service")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-20 my-10">
        {cardData.map((data, index) => (
          <ServiceCard key={index} {...data} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="border-2 border-black font-bold py-2 px-4 rounded">
          {`Read More >`}
        </button>
      </div>
    </>
  );
};

export default Service2;
