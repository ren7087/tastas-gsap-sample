const Footer = () => {
  return (
    <footer className="bg-primaryBG text-white text-center py-10 relative">
      <div
        className="flex flex-col md:flex-row justify-center mb-10 bg-primarySkyBlue mx-4 md:mx-20 py-5 rounded-full"
        style={{ zIndex: 100 }}
      >
        <div className="w-full md:w-1/2 flex text-center text-2xl m-auto font-bold border-r-2 border-white">
          <p className="m-auto">株式会社AMBC</p>
          <button className="ml-1 text-sm border-2  m-auto border-white px-5 rounded-full">
            会社概要
          </button>
        </div>
        <div className="w-full md:w-1/2 text-sm mt-4 md:mt-0 md:ml-5">
          <p>105-0003 東京都港区西新橋1-18-6 クロスオフィス内幸町3階</p>
          <p>TEL 03-6206-1480 FAX 03-6206-1481</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="items-center m-auto w-full md:w-2/12">
          <span className="font-bold text-lg">AMBC INC.</span>
        </div>
        <div className="font-bold w-full md:w-7/12">
          <div className="space-x-4">
            <div className="space-x-4">
              <a href="#" className="pr-5 border-r-2 border-white">
                サービス
              </a>
              <a href="#" className="pr-5 border-r-2 border-white">
                会社概要
              </a>
              <a href="#" className="pr-5 border-r-2 border-white">
                マネジメントチーム
              </a>
              <a href="#">お問い合わせ</a>
            </div>
            <div className="space-x-4 pt-5">
              <a href="#" className="pr-5 border-r-2 border-white">
                個人情報保護方針
              </a>
              <a href="#" className="pr-5 border-r-2 border-white">
                サイトのご利用にあたって
              </a>
              <a href="#" className="pr-5 border-r-2 border-white">
                ENGLISH
              </a>
              <a href="#">お問い合わせ</a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/12 mt-4 md:mt-0">
          <p className="text-gray-400">
            Copyright © AMBC Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
