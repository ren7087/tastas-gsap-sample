import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalImage from "../../assets/global.mp4";

const Welcome = () => {
  const containerRef = useRef(null);
  const linesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textsRefs.current.forEach((text, index) => {
      if (text && linesRefs.current[index]) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
          },
          defaults: { ease: "power2.inOut" },
        });

        // マスキングテープのアニメーションを設定
        tl.fromTo(
          linesRefs.current[index],
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 0.5,
            ease: "none",
          }
        )
          .fromTo(
            text,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.2,
            },
            "<" // マスキングテープのアニメーションと同時に開始
          )
          .to(linesRefs.current[index], {
            scaleX: 0,
            duration: 0.5,
            transformOrigin: "right",
            ease: "none",
          })
          .to(
            text,
            { opacity: 1, duration: 1.2 },
            ">" // マスキングテープが閉じるときにテキストを非表示にする
          );
      }
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
        <source src={GlobalImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="px-6 md:px-20 py-10 md:py-40 font-bold text-xl md:text-6xl text-white text-right overflow-hidden">
          {/* 各行を個別のdivで囲み、それぞれに ref を割り当てる */}
          {["ようこそ", "デジタル化がもたらす", "ビジネス変革の時代へ"].map(
            (line, index) => (
              <div key={index} className="relative overflow-hidden">
                <span
                  ref={(el) => (textsRefs.current[index] = el)}
                  className="z-20 block"
                >
                  {line}
                </span>
                <div
                  ref={(el) => (linesRefs.current[index] = el)}
                  className="absolute top-0 h-full"
                  style={{ zIndex: 10, width: "100%", left: "50%" }}
                ></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
