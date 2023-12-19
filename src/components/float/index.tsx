import { ReactElement, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FloatComponent = (): ReactElement => {
	useEffect(() => {
		// 'typeof window !== 'undefined'' を使用してクライアントサイドかどうかを確認
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
			setAnimation();
		}
	}, []);

	const setAnimation = () => {
		gsap.fromTo(
			"#wrapper-a p",
			{ opacity: 0, y: 10 }, // fromの設定
			{
				// toの設定
				opacity: 1,
				y: 0,
				duration: 2,
				scrollTrigger: {
					trigger: "#wrapper-a",
					start: "top center", // 要素のトップが、画面の中央まできたら開始
					end: "bottom center", // 要素のボトムが、画面の中央まできたら終了
					onEnter: () => {
						console.log("scroll In");
					},
					onEnterBack: () => {
						console.log("scroll Back");
					},
				},
			}
		);
	};
	return (
		<div className="wrapper" id="wrapper-a">
			<p>TEST ANIMATION</p>
		</div>
	);
};

export default FloatComponent;
