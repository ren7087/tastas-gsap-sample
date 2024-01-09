type Props = {
  position1: string;
  position2: string;
  name: string;
  marginTop?: number;
};

const ManagementCard = ({ position1, position2, name, marginTop }: Props) => {
  const cardStyle = {
    marginTop: marginTop ? `${marginTop}px` : undefined,
  };

  return (
    <div
      className={`w-80 mx-auto bg-white rounded-xl border-2 botder-black md:flex md:flex-col h-max`}
      style={cardStyle}
    >
      <div className="p-8 md:flex-grow">
        <div className="uppercase tracking-wide text-lg font-semibold">
          {position1}
          <br />
          {position2}
        </div>
        <div className="pt-3 uppercase tracking-wide text-lg font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
