import BussinessImage from "../../../assets/bussiness01.png";

type Props = {
  title1: string;
  title2: string;
  description: string;
  marginTop?: number;
};

const ServiceCard = ({ title1, title2, description, marginTop }: Props) => {
  const cardStyle = {
    marginTop: marginTop ? `${marginTop}px` : undefined,
  };

  return (
    <div
      className={`max-w-md mx-auto bg-white overflow-hidden md:flex md:flex-col h-max`}
      style={cardStyle}
    >
      <div className="md:flex-shrink-0">
        <img className="w-full object-cover" src={BussinessImage} alt="Card" />
      </div>
      <div className="px-5 py-7 bg-sky-600 text-white md:flex-grow text-center">
        <div className="uppercase tracking-wide text-sm font-serif">
          {title1}
        </div>
        <div className="uppercase tracking-wide text-2xl font-bold py-2">
          {title2}
        </div>
        <p className="mt-2 pt-3 border-t-2 border-white">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
