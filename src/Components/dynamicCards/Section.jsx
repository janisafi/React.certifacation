// src/components/Section.jsx
import React from "react";

export default function Section({ title, description, img, reverse, alt }) {
  return (
    <section className="w-full text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div
        className={`flex ${
          reverse ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row"
        } items-center justify-between gap-10 h-full`}
      >
        {/* Text Card */}
        <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left justify-center bg-[#252529]/60 p-6 rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent blur-3xl rounded-full animate-gradientPulse" />
          <img
            src={img}
            alt={alt}
            className="relative z-10 w-4/5 md:w-3/4 lg:w-[90%] xl:w-[95%] transition-transform duration-700 hover:scale-105 drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
