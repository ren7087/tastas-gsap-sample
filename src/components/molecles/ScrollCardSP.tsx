import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ManagementTeam } from "../../types/type";
import HandwrittenText from "../atoms/HandwrittenText";

type Props = {
  managementTeam: ManagementTeam;
};

const ScrollCardSP = ({ managementTeam }: Props) => {
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

  return (
    <div className="card-container">
      {managementTeam.map((person, index) => (
        <div
          ref={(el: HTMLDivElement) => (cardsRef.current[index] = el)}
          className="card relative bg-gradient-to-r from-purple-500 to-blue-500"
          key={index}
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <div className="flex md:hidden">
            <p className="text-8xl">0</p>
            <p className="text-8xl num-info">{index + 1}</p>
            <p className="text-3xl text-gray-300 mt-12 ml-4">/4</p>
          </div>
          <div className="text-center mt-10 text-white">
            <p className="text-sm font-bold text-info">{person.position}</p>
            <p className="text-3xl font-bold pt-3 text-info">{person.name}</p>
            <HandwrittenText name={person.name2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCardSP;
