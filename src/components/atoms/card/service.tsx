import ServieImage from "../../../assets/service_03.png";

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
      className={`max-w-md mx-auto bg-white rounded-xl overflow-hidden border-2 botder-black md:flex md:flex-col h-max`}
      style={cardStyle}
    >
      <div className="md:flex-shrink-0 p-3">
        <img className="w-full object-cover" src={ServieImage} alt="Card" />
      </div>
      <div className="p-3 md:flex-grow">
        <div className="uppercase tracking-wide text-sm font-bold">
          {title1}
        </div>
        <div className="uppercase tracking-wide text-m font-bold">{title2}</div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
