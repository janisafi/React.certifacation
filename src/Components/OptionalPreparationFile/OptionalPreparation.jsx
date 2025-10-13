import React from "react";
import { optionaldata } from "../Constants/OptionalPreparationData";

export default function OptionalPreparation() {
  return (
    <section className="min-h-screen w-full bg-[#191919] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex justify-center mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl w-[500px] font-bold tracking-wide leading-tight">
          <span className="text-[#48cfe7] ">Optional Preparation</span> <br /> 
          <br />
           Training
          Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {optionaldata.map((data, index) => {
          const Icon = data.icon;
          const Check = data.chick;
          return (
            <div
              key={index}
              className="bg-[#252529]/70 rounded-2xl p-10 sm:p-11 shadow-lg hover:shadow-[#3f5dfc]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3 mb-4">
                <Icon className="text-[#19c3e0] text-5xl m-8 sm:text-7xl" />
                <h2 className="text-xl sm:text-5xl mt-4 font-semibold">
                  {data.title}
                </h2>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-xl hover:text-2xl sm:text-pretty">
                {data.pergeraf}
              </p>

              <ul className="space-y-4 mb-8">
                {data.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <Check className="text-green-400 text-lg sm:text-2xl mt-1 shrink-0" />
                    <span className="text-xl sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="text-2xl w-[110px] py-3 border-cyan-500 border-2 hover:bg-[#19c3e0] text-white font-medium rounded-lg transition-all duration-300">
                {data.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
