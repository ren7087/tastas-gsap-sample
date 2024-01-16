type Props = {
  name?: string;
};

const HandwrittenText = (props: Props) => {
  const handwrittenTextStyle = {
    fontFamily: "Dancing Script, cursive",
    fontSize: "48px",
    color: "white",
    marginTop: "10px",
    right: "10px", // 右端からの距離
  };

  return (
    <div style={handwrittenTextStyle} className="absolute text-right">
      {props.name}
    </div>
  );
};

export default HandwrittenText;
