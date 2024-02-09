import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ServiceCard from "../atoms/card/service";
import Button from "../atoms/button";
import ServiceImage from "../../assets/service01.jpg";

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

  const cardData = [
    {
      title1: "Consulting Service",
      title2: "経営戦略・事業戦略",
      description: `デジタル変革の果実を先取りして企業価値最大化と競争優位性を確立する経営戦略・事業戦略の策定と、戦略の具体化に向けた施策の定義と実行計画の作成をご支援することで、企業の変革をともに成し遂げます。`,
      marginTop: -100,
    },
    {
      title1: "Consulting Service",
      title2: "ソリューション導入",
      description: `ビジネスとテクノロジーの融合を正しく理解し、変革に伴うリスクを管理しつつ、ビジネス成果を迅速かつ確実に実現するソリューションを確実にお届け致します。`,
      marginTop: -20,
    },
    {
      title1: "Consulting Service",
      title2: `BPR、\nチェンジマネジメント`,
      description: `リーダーシップ、コミュニケーション他の戦略理論を組み合わせ、デジタル変革のためのBPRとチェンジマネジメントを着実に実装いたします。`,
      marginTop: 80,
    },
    {
      title1: "Consulting Service",
      title2: "M&A、企業価値評価",
      description: `専門性の高いコンサルタントが顧客企業の全体像を見据え、顧客企業の立場にたったプロジェクト推進をおこない、プロジェクトを確実に成功へと導きます。`,
      marginTop: -60,
    },
    {
      title1: "IT Service",
      title2: "ITシステム開発",
      description: `オブジェクト指向型ソフトウェア開発に関わる業界最高レベルの技術知識と、多種多様な業界に関わる業務知見を駆使することで、ITシステムの開発をご支援いたします。`,
      marginTop: 0,
    },
  ];

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
