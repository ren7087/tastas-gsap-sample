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

const ScrollCard2 = ({ managementTeam }: Props) => {
  const cardsRef = useRef<HTMLDivElement[]>(new Array(managementTeam.length));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top-=0 top",
        end: "bottom",
        pin: true,
        pinSpacing: false,
        onLeave: () => {
          gsap.to(card, { autoAlpha: 0 });
        },
        onLeaveBack: () => {
          gsap.to(card, { autoAlpha: index === 0 ? 1 : 0 });
        },
      });
    });

    // Initial visibility for the first card
    gsap.to(cardsRef.current[0], { autoAlpha: 1 });

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
          className="card relative py-20 md:flex"
          key={index}
        >
          <img
            src={imgDisplay(person.name)}
            alt="management"
            className="w-full h-96 md:h-[500px]"
          />
          <div className="absolute text-center bottom-0 right-0 p-7 pb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-4/12 hidden md:block">
            <p className="text-sm">{person.position}</p>
            <p className="text-3xl font-bold pt-3">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
          <div className="text-center mt-10 text-white md:hidden">
            <p className="text-sm font-bold">{person.position}</p>
            <p className="text-3xl font-bold pt-3">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard2;
