import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" flex justify-between items-center max-w-[1350px] mx-auto px-8 text-white fixed top-0 z-50 w-full h-14 bg-black">
        <Link to="/">
          <h1 className="w-full text-3xl font-semibold text-white">BM</h1>
        </Link>
        <ul  className="mysl font-semibold">
          <li className="mx-4  text-white ">
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-4  text-gray-500 hover:text-white ">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="mx-4  text-gray-500 hover:text-white ">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="mx-4  text-gray-500 hover:text-white ">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden text-white fixed left-0 top-0 w-[60%] h-full border-r border-r-text-gray-300 bg-[#171717] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4">BM</h1>
          <ul className="p-4">
            <li className="px-4 py-2 border-b hover:text-gray-300">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-4 py-2 border-b hover:text-gray-300">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="px-4 py-2 border-b hover:text-gray-300">
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="px-4 py-2 border-b hover:text-gray-300">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
