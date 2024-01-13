import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ManagementTeam } from "../../types/type";
import BuildingImage from "../../assets/building.png";
import HandwrittenText from "../atoms/HandwrittenText";

type Props = {
  managementTeam: ManagementTeam;
};

const ScrollCard2 = ({ managementTeam }: Props) => {
  const cardsRef = useRef<HTMLDivElement[]>(new Array(managementTeam.length));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElementsIn = (element: HTMLDivElement) => {
      // 上方向からのスライドイン
      gsap.from(element.querySelectorAll(".text-info"), {
        duration: 1.5,
        autoAlpha: 0,
        y: 100,
        stagger: 0.3,
        ease: "power2.out",
      });
      gsap.from(element.querySelectorAll(".text-info-positon"), {
        duration: 1.7,
        autoAlpha: 0,
        y: 100,
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

      gsap.from(element.querySelectorAll(".img-info"), {
        duration: 1.5,
        autoAlpha: 0,
        y: -500, // 上方向からのスタート
        rotation: 15, // 45度の角度からスタート
        ease: "power2.out",
      });
    };

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top-=0 top",
        end: "bottom",
        pin: true,
        pinSpacing: true,
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

  return (
    <div className="card-container mb-20">
      {managementTeam.map((person, index) => (
        <div
          ref={(el: HTMLDivElement) => (cardsRef.current[index] = el)}
          className="card"
          key={index}
          style={{ visibility: index === 0 ? "visible" : "hidden" }} // First card is always visible
        >
          <div className="relative py-20 flex">
            <img src={BuildingImage} alt="building" className="w-full h-96" />
            <div className="absolute text-center bottom-0 right-0 w-4/12 p-7 pb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <p className="text-sm">{person.position}</p>
              <p className="text-3xl font-bold pt-3">{person.name}</p>
              <HandwrittenText name={person.name2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard2;
