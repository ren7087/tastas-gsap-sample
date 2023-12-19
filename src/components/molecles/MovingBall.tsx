import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const MovingBall = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    gsap.to(ballRef.current, {
      duration: 10,
      repeat: -1,
      ease: "linear",
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <div className="h-10">
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="motionPath"
          fill="none"
          stroke="white"
          strokeWidth="2"
          d="M20,20 Q400,300 780,20 Q400,340 20,600 Q400,0 780,600"
          style={{ opacity: 0.5 }}
        />
        <circle ref={ballRef} cx="0" cy="0" r="10" fill="red" />
      </svg>
    </div>
  );
};

export default MovingBall;
