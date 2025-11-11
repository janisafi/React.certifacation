import React from "react";
import { examdata } from "../Constants/imgsData";

export default function ExaminationBoard() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl sm:text-7xl font-bold text-white">
          <span className="text-cyan-700">Examination</span> Board
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center  gap-8 max-w-[1200px] mx-auto">
        {examdata.map((member, idx) => {
          const GithubIcon = member.githubicon;
          const XIcon = member.xicon;

          return (
            <div
              key={idx}
              className="group relative w-[250px] bg-[#222] rounded-3xl overflow-hidden shadow-md hover:shadow-xl flex-shrink-0 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-auto w-full">
                <img
                  src={member.img}
                  alt={member.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-sky-400">
                  {member.title}
                </h2>
                <p className="text-gray-400 text-sm leading-snug">
                  {member.pergerph}
                </p>

                <div className="flex gap-4 mt-3">
                  <GithubIcon
                    className="text-gray-400 transition-colors duration-300 group-hover:text-cyan-400 cursor-pointer"
                    size={22}
                  />
                  <XIcon
                    className="text-gray-400 transition-colors duration-300 group-hover:text-sky-400 cursor-pointer"
                    size={22}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
