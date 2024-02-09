import Bussiness1Image from "../../../assets/service/01.jpg";
import Bussiness2Image from "../../../assets/service/02.jpg";
import Bussiness3Image from "../../../assets/service/03.jpg";
import Bussiness4Image from "../../../assets/service/04.jpg";
import Bussiness5Image from "../../../assets/service/05.jpg";

type Props = {
  title1: string;
  title2: string;
  description: string;
  marginTop?: number;
  index?: number;
};

const ServiceCard = ({
  title1,
  title2,
  description,
  marginTop,
  index = 0,
}: Props) => {
  const cardStyle = {
    marginTop: marginTop ? `${marginTop}px` : undefined,
  };

  const imgDisplay = (index: number) => {
    // indexによって表示する画像を変える
    switch (index) {
      case 0:
        return Bussiness1Image;
      case 1:
        return Bussiness2Image;
      case 2:
        return Bussiness3Image;
      case 3:
        return Bussiness4Image;
      case 4:
        return Bussiness5Image;
    }
  };

  const renderWithBreaks = (text: string) => {
    // 改行でテキストを分割し、配列にする
    return text.split("\n").map((line, index, array) => {
      // 各行をspanで囲む
      // 最後の行以外の後にはbrタグを挿入する
      return (
        <span key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div
      className={`max-w-md mx-auto bg-white overflow-hidden md:flex md:flex-col h-max`}
      style={cardStyle}
    >
      <div className="md:flex-shrink-0">
        <img
          className="w-full object-cover h-56 md:h-48"
          src={imgDisplay(index)}
          alt="Card"
        />
      </div>
      <div className="px-5 py-7 bg-primarySkyBlue text-white md:flex-grow text-center">
        <div className="uppercase tracking-wide text-sm font-serif">
          {title1}
        </div>
        <div className="uppercase tracking-wide text-2xl font-bold py-2">
          {renderWithBreaks(title2)}
        </div>
        <p className="mt-2 pt-3 border-t-2 border-white">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
