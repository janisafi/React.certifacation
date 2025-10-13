import React from "react";
import img from "../../assets/patners.png";

export default function Companies() {
  return (
    <section className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center text-center px-4 md:px-10 py-20 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 leading-snug">
        Companies that use{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
          React
        </span>
      </h1>

      <div className="w-full flex justify-center overflow-hidden">
        <img
          src={img}
          alt="Companies using React"
          className="w-[200%] sm:w-[160%] md:w-[130%] lg:w-[110%] xl:w-[100%] object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-40 px-4">
        <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl text-white font-bold leading-tight max-w-[700px] mx-auto">
          Benefits of getting your <br />
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">React Certification</span>
        </h2>
      </div>
    </section>
  );
}
