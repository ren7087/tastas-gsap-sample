type Props = {
  name?: string;
};

const HandwrittenText = (props: Props) => {
  const handwrittenTextStyle = {
    fontFamily: "Dancing Script, cursive",
    fontSize: "48px",
    color: "white",
    marginTop: "10px",
  };

  return (
    <div style={handwrittenTextStyle} className="absolute text-center">
      {props.name}
    </div>
  );
};

export default HandwrittenText;
