import LogoImage from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={{ height: "70px" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoImage} alt="logo" className="w-50 h-20 m-auto" />
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className="m-auto">
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                会社概要
              </a>
            </li>
            <li className="m-auto">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                マネジメントチーム
              </a>
            </li>
            <li className="m-auto">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                English
              </a>
            </li>
            <li className="m-auto">
              <button className="block py-2 px-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
                お問い合わせ
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
