type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="font-bold py-3 px-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      {text}
    </button>
  );
};

export default Button;
