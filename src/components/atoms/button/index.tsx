type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="border-2 border-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white">
      {text}
    </button>
  );
};

export default Button;
