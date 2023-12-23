import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ManagementTeam } from "../../types/type";
import Management from "../../assets/management.png";

type Props = {
  managementTeam: ManagementTeam;
};

const ScrollCard = ({ managementTeam }: Props) => {
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
          className="card flex flex-col md:flex-row min-h-screen"
          key={index}
          style={{ visibility: index === 0 ? "visible" : "hidden" }} // First card is always visible
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="p-14 text-center font-bold">
              <div className="flex">
                <p className="text-3xl font-bold mb-2 text-info-positon">
                  {person.position}
                </p>
                <p className="text-3xl ml-5 text-info">{person.name}</p>
              </div>
              <p className="text-info py-14">{person.career}</p>
              <div className="flex">
                <p className="text-8xl">0</p>
                <p className="text-8xl num-info">{index + 1}</p>
                <p className="text-2xl text-gray-300 mt-12 ml-4">/4</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-14 items-center">
            <div className="img-info text-center">
              <img src={Management} alt="" width={500} height={800} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard;
