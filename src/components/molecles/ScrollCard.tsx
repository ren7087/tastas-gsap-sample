import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ManagementTeam } from "../../types/type";
import Management1Image from "../../assets/management/01.jpg";
import Management2Image from "../../assets/management/02.jpg";
import Management3Image from "../../assets/management/03.jpg";
import Management4Image from "../../assets/management/04.jpg";
import HandwrittenText from "../atoms/HandwrittenText";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ManagementTeamMaxHeight } from "../../constants";

type Props = {
  managementTeam: ManagementTeam;
};

const ScrollCard = ({ managementTeam }: Props) => {
  const cardsRef = useRef<HTMLDivElement[]>(new Array(managementTeam.length));
  const height = useWindowSize();

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
        duration: 0.3,
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
        start: "top-=300 top",
        end: "bottom",
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          gsap.to(card, { autoAlpha: 1, duration: 0.3 });
          if (index !== 0) {
            animateElementsIn(card);
          }
        },
        onEnterBack: () => {
          gsap.to(card, { autoAlpha: 1, duration: 0.3 });
          animateElementsIn(card);
        },
        onLeave: () => gsap.to(card, { autoAlpha: 0, duration: 0.3 }),
        onLeaveBack: () =>
          gsap.to(card, { autoAlpha: index === 0 ? 1 : 0, duration: 0.3 }),
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
    <div className="card-container">
      {managementTeam.map((person, index) => (
        <div
          ref={(el: HTMLDivElement) => (cardsRef.current[index] = el)}
          className="card relative md:flex"
          key={index}
          style={{ opacity: index === 0 ? 1 : 0, overflow: "hidden" }}
        >
          <img
            src={imgDisplay(person.name)}
            alt="management"
            className="w-full px-16 pb-5"
            style={{
              height: height > ManagementTeamMaxHeight ? "29rem" : "24rem",
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
          <div className="absolute text-center bottom-0 right-0 p-7 pb-20 mr-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-4/12 hidden md:block">
            <p className="text-sm text-info">{person.position}</p>
            <p className="text-3xl font-bold pt-3 text-info">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard;
