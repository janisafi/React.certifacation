import React from "react";
// import hero from "../../assets/Imges/lastsection.svg"
import { FaGithub, FaRegEnvelope } from "react-icons/fa";

export default function Sectionlast() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-12 gap-10">
      <div className="flex-1  lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug  md:text-left">
          Certificates for <br />{" "}
          <span className="text-blue-400">
            modern <br /> developer
          </span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-full md:max-w-md  md:text-left">
          Earn certifications that will validate your skills and knowledge,
          demonstrate your commitment, and enhance your job prospects and career
          advancement.
        </p>

        <button className="mt-6 inline-flex items-center justify-center gap-2 px-32 py-3 border-2 border-blue-400 text-white rounded hover:bg-blue-400/20 transition">
          <FaGithub className="h-6 w-6" />
          <span>Sign up with Github</span>
        </button>

        <div className="mt-10 flex flex-col gap-3 items-center lg:items-start w-full">
          <p className="text-[#979F9A]">Or create an account with your email</p>

          <div className="flex items-center  bg-black rounded-lg px-3 py-3 w-full max-w-md">
            <FaRegEnvelope className="text-gray-400 mr-2 text-xl" />
            <input
              className="flex-1 bg-black text-white outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button className="bg-blue-500 text-white w-full max-w-md py-3 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={hero}
          alt="Hero"
          className="w-full max-w-lg md:max-w-xl lg:max-w-3xl"
        />
      </div>
    </div>
  );
}
