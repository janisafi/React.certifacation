import React from "react";
import { stepslinks } from "./StepsData";
import { BsMenuUp } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

export default function Steps() {
  return (
    <section className="w-full min-h-[30vh] bg-[#1A1A1A] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 sm:mb-12">
        Steps to <span className="text-[#00BFFF]">Certification</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[100%]">
        {stepslinks.map((data, index) => (
          <div
            key={data.id}
            className="bg-[#252529] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between shadow-md transition-all hover:scale-[1.03] duration-300 w-full sm:w-[85%] md:w-[48%] lg:w-[47%] xl:w-[46%] 2xl:w-[45%]"
          >
            <div className="flex flex-col  items-start mb-4 sm:mb-0">
              <h3 className="text-[#00BFFF] text-base sm:text-lg font-semibold mb-3 tracking-wider">
                {data.title.toUpperCase()}
              </h3>
              <div className="bg-[#00BFFF] text-[#0A0F1F] p-3 sm:p-4 rounded-md text-2xl sm:text-3xl flex items-center justify-center">
                {index === 0 ? <BsMenuUp /> : <BiCodeAlt />}
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                {data.titileh1}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px]">
                {data.pergerap}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
