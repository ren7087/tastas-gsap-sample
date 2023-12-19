const Footer = () => {
	return (
		<footer className="bg-white text-center my-20">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<span className="font-bold text-lg">AMBC INC.</span>
					</div>
					<div className="flex space-x-4 font-bold">
						<a href="#">会社概要</a>
						<a href="#">マネジメントチーム</a>
						<a href="#">お問い合わせ</a>
						<a href="#">個人情報保護方針</a>
						<a href="#">サイトのご利用にあたって</a>
					</div>
					<div>
						<a href="#">ENGLISH</a>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<p className="text-gray-400">
					Copyright © AMBC Inc. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
