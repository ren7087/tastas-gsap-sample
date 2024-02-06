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
    <div
      style={handwrittenTextStyle}
      className="md:absolute md:text-right md:right-2.5 text-info2"
    >
      {props.name}
    </div>
  );
};

export default HandwrittenText;
