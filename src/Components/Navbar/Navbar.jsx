import React, { useState, useEffect } from "react";
import { logo } from "../../assets/Imges";
import { navLink } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassClasses = scrolled
    ? "backdrop-blur-lg bg-white/10  shadow-lg"
    : "bg-gradient-to-r from-[#0D1117] via-[#1B2A38] to-[#61DAFB]";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${glassClasses}`}
    >
      <nav className="container mx-auto flex items-center justify-between h-[80px] px-4">
        <div className="logo">
          <img className="w-[48px]" src={logo} alt="logo" />
        </div>

        <div className="hidden xl:flex xl:items-center gap-8">
          {navLink.map((data, index) => (
            <ul
              key={index}
              className="text-white font-bold flex items-center gap-1 relative group"
            >
              <li className="cursor-pointer text-sm hover:text-[#58C4DC] relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[5px] after:h-[2px] after:w-0 after:bg-[#42aac3] after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                {data.title}
              </li>
              {data.icon && <data.icon className="text-white text-sm" />}
            </ul>
          ))}

          <button className="bg-[#58C4DC] px-4 py-2 rounded-lg font-bold hover:bg-[#42aac3] transition-all">
            Buy Now
          </button>

          <div className="flex gap-2 bg-[#252529] py-2 px-3 rounded-full">
            <IoIosMoon
              className="text-white cursor-pointer hover:text-yellow-400 transition-colors"
              size={20}
            />
            <IoMdSunny
              className="text-white cursor-pointer hover:text-yellow-300 transition-colors"
              size={20}
            />
          </div>
        </div>

        <div className="xl:hidden cursor-pointer z-50">
          {toggle ? (
            <FiX
              className="text-white transition-all duration-300"
              size={35}
              onClick={() => setToggle(false)}
            />
          ) : (
            <FiMenu
              className="text-white transition-all duration-300"
              size={35}
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </nav>

      <div
        className={`xl:hidden w-[90%] mx-auto rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-lg transform-gpu ${
          toggle
            ? "max-h-[500px] opacity-100 py-6 scale-100 translate-y-0 bg-white/10 backdrop-blur-lg border border-white/20"
            : "max-h-0 opacity-0 py-0 scale-95 -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center py-10 gap-6 px-4">
          {navLink.map((data, index) => (
            <div
              key={index}
              className="text-white font-semibold flex items-center gap-3 justify-center hover:text-[#58C4DC] cursor-pointer text-lg transition-all duration-300"
            >
              <p>{data.title}</p>
              {data.icon && <data.icon className="text-white text-sm" />}
            </div>
          ))}

          <button className="bg-[#58C4DC] hover:bg-[#42aac3] text-white font-bold px-6 py-3 rounded-2xl w-full max-w-[200px] shadow-md transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            Buy Now
          </button>

          <div className="flex justify-center items-center gap-4 bg-[#33333a] py-2 px-5 rounded-full mt-3 shadow-inner">
            <IoIosMoon
              className="text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300"
              size={22}
            />
            <IoMdSunny
              className="text-white hover:text-yellow-300 cursor-pointer transition-colors duration-300"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
