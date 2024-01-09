import PMarkImage from "../../assets/pmark.jpg";

const Footer2 = () => {
  return (
    <footer className="bg-white my-20">
      <div className="grid grid-cols-2 gap-4 mx-20 my-10">
        <div>
          <p>個人情報保護方針</p>
          <p>サイトのご利用にあたって</p>
          <img src={PMarkImage} alt="Pマーク" className="w-24 h-24 mt-3" />
        </div>
        <div>
          <p>株式会社AMBC</p>
          <p>東京都港区西新橋 1-18-6 クロスオフィス内幸町3 階</p>
          <p>TEL : 03-6206-1480</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
