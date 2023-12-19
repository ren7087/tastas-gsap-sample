import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const MovingBalls = () => {
  const ballRefs = useRef<SVGCircleElement[]>([]);
  ballRefs.current = [];

  const addToRefs = (el: SVGCircleElement) => {
    if (el && !ballRefs.current.includes(el)) {
      ballRefs.current.push(el);
    }
  };

  useEffect(() => {
    ballRefs.current.forEach((ball, index) => {
      gsap.to(ball, {
        duration: 5 + index, // Duration varies for each ball
        repeat: -1,
        ease: "linear",
        motionPath: {
          path: `#path${index + 1}`,
          align: `#path${index + 1}`,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
    });
  }, []);

  return (
    <div className="h-3 -ml-40 md:ml-0" style={{ marginTop: "-80px" }}>
      <svg
        width="800"
        height="600"
        viewBox="0 0 800 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define multiple paths */}
        <path
          id="path1"
          d="M20,20 Q400,300 780,20"
          stroke="white"
          fill="none"
        />
        <path
          id="path2"
          d="M20,120 Q400,400 780,120"
          stroke="white"
          fill="none"
        />
        <path
          id="path3"
          d="M20,220 Q400,500 780,220"
          stroke="white"
          fill="none"
        />

        {/* Multiple balls */}
        <circle ref={addToRefs} cx="0" cy="0" r="10" fill="red" />
        <circle ref={addToRefs} cx="0" cy="0" r="10" fill="blue" />
        <circle ref={addToRefs} cx="0" cy="0" r="10" fill="green" />
      </svg>
    </div>
  );
};

export default MovingBalls;
