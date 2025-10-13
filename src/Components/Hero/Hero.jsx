import React from "react";
import { heroImg, heroSimg } from "../../assets/Imges";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Navbar } from "../index";

export default function Hero() {
  return (
    <section className=" bg-gradient-to-r p-5 from-[#0D1117] via-[#1B2A38] to-[#61DAFB]">
      <div className="container text-center pt-10">
        <div className="md:flex md:justify-center xl:justify-start">
          <div className="rounded-lg mt-5 bg-[#273C41] md:w-96">
            <h1 className="text-white py-3 font-bold">
              Junior, Mid-Level and Senior Exams now available
            </h1>
          </div>
        </div>

        <div className="mt-10 xl:flex xl:justify-between xl:items-start xl:gap-10">
          <div className="xl:w-1/5 xl:text-left">
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight xl:pt-10">
              <span className="text-[#58C4DC] block md:inline">React </span>
              <span className="block md:inline">Certification</span>
            </h1>
            <p className="text-white font-bold md:text-3xl pt-4">
              Certification of competence for React
            </p>

            <div className="mt-6 relative xl:hidden">
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-[50%] h-[90%]">
                <img
                  src={heroSimg}
                  alt="React Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-6 xl:mt-10 space-y-3 xl:space-y-4">
              <div className="flex justify-center items-center border-2 rounded-lg text-white border-[#58C4DC] gap-3 py-2 px-2 md:w-[700px] md:mx-auto xl:w-[400px] cursor-pointer hover:bg-[#58C4DC]/10 transition-all">
                <IoLogoGithub size={30} />
                <h1>Sign Up with GitHub</h1>
              </div>

              <div className="flex justify-center items-center border-2 rounded-lg text-white border-[#58C4DC] gap-3 py-2 px-2 md:w-[700px] md:mx-auto xl:w-[400px] cursor-pointer hover:bg-[#58C4DC]/10 transition-all">
                <FaDiscord size={30} />
                <h1>Sign Up with Discord</h1>
              </div>

              <div className="mt-8 xl:flex xl:flex-col xl:items-start space-y-3">
                <p className="text-[#888F9B]">
                  Or create an account with your email
                </p>
                <div className="md:flex md:gap-3 items-center justify-center xl:justify-start">
                  <div className="flex gap-3 bg-[#1A1A1A] border border-gray-600 rounded-lg w-full md:w-9/12 lg:w-6/12 py-2 px-3 focus-within:border-white xl:w-[400px]">
                    <IoMdMail size={20} className="text-white" />
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
                    />
                  </div>
                  <button className="mt-3 md:mt-0 w-full md:w-40 px-2 py-3 bg-[#58C3DB] text-black rounded-lg font-bold hover:bg-[#42aac3] transition-colors">
                    Sign Up
                  </button>
                </div>
                <p className="text-[#888F9B] mt-4">
                  Powered by <span className="underline">Certificates.dev</span>
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 hidden xl:flex justify-center relative">
            <img
              src={heroImg}
              alt="Hero XL"
              className="w-full h-auto rounded-lg group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:-translate-y-6 duration-150"
            />
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-[50%] h-[90%]">
              <img
                src={heroSimg}
                alt="React Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-full  py-8 px-6 text-center flex flex-wrap items-center justify-center gap-8 !gap-y-4 font-bold md:text-xl">
            <p className="text-white font-bold text-xl w-80 text-center md:w-auto md:text-left pt-4 md:text-3xl xl:text-2xl">
              <span className="block md:inline">
                Would you like to see more
              </span>{" "}
              <span className="block text-[#4686FE] md:inline">
                Certifications?
              </span>
            </p>
            <div className="btn py-2 px-3 text-white font-bold border-blue-500 border-2 mt-4 md:mt-0 rounded-lg hover:bg-blue-500 hover:text-black transition-all">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
