import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ITImage from "../../assets/it.jpeg";
import ConsultingImage from "../../assets/consulting.jpeg";
import MovingBalls from "../molecles/MovingBalls";

const Service = () => {
	const titleRef = React.useRef<HTMLParagraphElement>(null);
	const itImageRef = React.useRef(null);
	const consultingImageRef = React.useRef(null);
	const rectRef = React.useRef(null);

	// テキストを文字ごとに分割する関数の型定義
	const splitText = (text: string): JSX.Element[] => {
		return text.split("").map((char, index) => (
			<span key={index} style={{ display: "inline-block" }}>
				{char}
			</span>
		));
	};

	const setScrollTriggerAnimation = (
		element: HTMLElement | null,
		delay = 0.3,
		isImage = false
	) => {
		gsap.fromTo(
			element,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				delay: delay,
				scrollTrigger: {
					trigger: element,
					start: "top bottom",
					end: "center center",
					onEnter: () => console.log("Element entered"),
					onEnterBack: () => console.log("Element entered back"),
					onLeaveBack: () => {
						if (isImage) {
							// スクロールバック時に画像をフェードアウト
							gsap.to(element, { opacity: 0, duration: 1.5 });
						}
					},
					toggleActions: "play none none reset", // toggleActionsを変更
				},
			}
		);
	};

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

			if (titleRef.current) {
				// titleRefの各文字に対してスクロールトリガーアニメーションを設定
				Array.from(titleRef.current.childNodes).forEach((char, index) => {
					if (char instanceof HTMLElement) {
						setScrollTriggerAnimation(char, index * 0.1);
					}
				});
			}

			setScrollTriggerAnimation(itImageRef.current, 0.3, true);
			setScrollTriggerAnimation(consultingImageRef.current, 0.8, true);

			// rect に対する幾何学的なアニメーション
			if (rectRef.current) {
				gsap.to(rectRef.current, {
					duration: 5,
					repeat: -1,
					ease: "linear",
					motionPath: {
						path: [
							{ x: 100, y: -50 },
							{ x: 200, y: 0 },
							{ x: 300, y: 100 },
							{ x: 400, y: 0 },
							{ x: 500, y: -50 },
						],
						autoRotate: true,
					},
				});
			}
		}
	}, []);

	return (
		<div className="py-12 overflow-hidden bg-gray-50">
			<div className="flex whitespace-nowrap">
				<p className="font-bold text-3xl ml-8 mr-5 md:text-7xl" ref={titleRef}>
					{splitText("Service")}
				</p>
				<MovingBalls />
			</div>
			<div className="flex justify-end mt-7">
				<div className="m-3" ref={itImageRef}>
					<img src={ITImage} alt="IT Service" className="rounded-lg" />
					<p className="text-center font-bold text-3xl mt-3">ITサービス</p>
				</div>
				<div className="m-3" ref={consultingImageRef}>
					<img
						src={ConsultingImage}
						alt="Consulting Service"
						className="rounded-lg"
					/>
					<p className="text-center font-bold text-3xl mt-3">
						コンサルティングサービス
					</p>
				</div>
			</div>
		</div>
	);
};

export default Service;
