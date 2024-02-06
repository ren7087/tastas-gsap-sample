import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ManagementTeam } from "../../types/type";
import Management1Image from "../../assets/management01.png";
import Management2Image from "../../assets/management02.png";
import Management3Image from "../../assets/management03.png";
import Management4Image from "../../assets/management04.png";
import HandwrittenText from "../atoms/HandwrittenText";

type Props = {
  managementTeam: ManagementTeam;
};

const ScrollCard3 = ({ managementTeam }: Props) => {
  const cardsRef = useRef<HTMLDivElement[]>(new Array(managementTeam.length));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElementsIn = (element: HTMLDivElement) => {
      // 上方向からのスライドイン
      gsap.from(element.querySelectorAll(".text-info"), {
        duration: 1.2,
        autoAlpha: 0,
        y: 100,
        stagger: 0.3,
        ease: "power2.out",
      });
      gsap.from(element.querySelectorAll(".text-info2"), {
        duration: 1.5,
        autoAlpha: 0,
        y: 50,
        stagger: 0.3,
        ease: "power2.out",
      });
      gsap.from(element.querySelectorAll(".num-info"), {
        duration: 0.5,
        autoAlpha: 0,
        y: 100,
        stagger: 0.3,
        ease: "power2.out",
      });
    };

    cardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top-=0 top",
        end: "bottom",
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          gsap.to(card, { autoAlpha: 1 });
          if (index !== 0) {
            animateElementsIn(card);
          }
        },
        onEnterBack: () => {
          gsap.to(card, { autoAlpha: 1 });
          animateElementsIn(card);
        },
        onLeave: () => gsap.to(card, { autoAlpha: 0 }),
        onLeaveBack: () => gsap.to(card, { autoAlpha: index === 0 ? 1 : 0 }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const imgDisplay = (name: string) => {
    // indexによって表示する画像を変える
    switch (name) {
      case "瀬賀 利明":
        return Management1Image;
      case "市川 至":
        return Management2Image;
      case "鍋田 正行":
        return Management3Image;
      case "久米 恵美":
        return Management4Image;
    }
  };

  return (
    <div className="card-container mb-20">
      {managementTeam.map((person, index) => (
        <div
          ref={(el: HTMLDivElement) => (cardsRef.current[index] = el)}
          className="card relative py-16 md:flex"
          key={index}
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          {/* スマホ画面の場合 */}
          <div className="flex md:hidden">
            <p className="text-8xl">0</p>
            <p className="text-8xl num-info">{index + 1}</p>
            <p className="text-3xl text-gray-300 mt-12 ml-4">/4</p>
          </div>
          {/* ここまで */}
          <img
            src={imgDisplay(person.name)}
            alt="management"
            className="w-full h-96 md:h-[500px]"
          />
          {/* PC画面の場合 */}
          <div className="absolute text-center bottom-0 right-0 p-7 pb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-4/12 hidden md:block">
            <p className="text-sm text-info">{person.position}</p>
            <p className="text-3xl font-bold pt-3 text-info">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
          {/* スマホ画面の場合 */}
          <div className="text-center mt-10 text-white md:hidden">
            <p className="text-sm font-bold text-info">{person.position}</p>
            <p className="text-3xl font-bold pt-3 text-info">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard3;
