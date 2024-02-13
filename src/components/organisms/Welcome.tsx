import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlovalImage from "../../assets/global.mp4";

const Welcome = () => {
  const maskRef = useRef(null); // マスキングテープ要素への参照
  const containerRef = useRef(null); // welcome-container要素への参照

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // アニメーションのタイムラインを作成し、ScrollTriggerと連携
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current, // トリガーとなる要素を設定
          start: "top bottom", // ビューポートのtopがトリガー要素のcenterに達した時に開始
          end: "bottom top", // トリガー要素のbottomがビューポートのtopに達した時に終了
          toggleActions: "play none none play", // スクロール方向に応じてアニメーションを再生・逆再生
        },
        defaults: { ease: "power2.inOut" },
      })
      .to(maskRef.current, {
        width: "100%",
        duration: 0.5,
      })
      .to(maskRef.current, {
        scaleX: 0,
        duration: 0.5,
        transformOrigin: "right",
      });
  }, []);

  return (
    <div
      className="relative welcome-container"
      style={{ height: "600px" }}
      ref={containerRef}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        controls={false}
      >
        <source src={GlovalImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="px-6 md:px-20 py-10 md:py-40 font-bold text-xl md:text-6xl text-white text-right overflow-hidden">
          <div className="relative inline-block">
            <span className="z-20">ようこそ</span>
            <br />
            <span className="z-20">
              デジタル化がもたらす
              <br />
              ビジネス変革の時代へ
            </span>
            {/* マスキングテープ */}
            <div
              ref={maskRef}
              className="absolute top-0 left-0 h-full bg-primarySkyBlue"
              style={{ zIndex: 10 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
