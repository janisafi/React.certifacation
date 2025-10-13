import React from "react";
import img from "../../assets/teamimg.svg";

export default function BenifitsForTheTeam() {
  return (
    <section className="w-full min-h-[80vh] bg-gradient-to-b from-[#1A1A1A] via-[#000000] to-[#1A1A1A] text-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10 h-full">
        <div className="flex flex-col gap-4 sm:gap-6 sm:w-1/2 text-center sm:text-left justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How Certification can benefit your team
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            A React certification validates your expertise in building robust,
            scalable applications with React. Employers and clients seek
            certified developers who stay ahead of the curve and deliver
            top-quality work. Showcase your commitment to excellence with a
            React credential built by recognized international experts.
          </p>
        </div>

        <div className="relative w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent blur-3xl rounded-full animate-gradientPulse" />
          <img
            src={img}
            alt="Team Benefits"
            className="relative z-10 w-3/4 sm:w-4/5 md:w-3/4 lg:w-[90%] xl:w-[95%] transition-transform duration-700 hover:scale-105 drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
