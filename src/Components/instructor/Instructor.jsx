import React from "react";
import img from "../../assets/reactfounder.webp";

export default function Instructor() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 py-20">
      <div className="relative flex flex-col  lg:flex-row w-full max-w-[1064px] bg-[#252529] rounded-3xl p-6 lg:p-8 shadow-3xl">
        <div className="flex flex-col items-center gap-3 lg:items-start lg:w-1/3 lg:pr-6">
          <img
            src={img}
            alt="Aurora Scharff"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 object-cover"
          />
          <h2 className="text-white text-xl md:text-2xl font-bold text-center lg:text-left">
            Aurora <span className="text-cyan-400">Scharff</span>
          </h2>
          <p className="text-gray-400 text-center w-[100px] lg:text-left text-sm md:text-base">
            React Expert and Microsoft MVP in Web Technologies
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:w-2/3 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Meet your <span className="text-cyan-400">instructor</span>
          </h1>
          <p className="text-quartz md:text-lg text-yellow-50">
            Aurora Scharff is a recognized React expert, Microsoft MVP in Web
            Technologies, and international conference speaker based in Norway.
            With extensive experience in React, Next.js, and React Server
            Components, she played a key role in shaping the React Certification
            program. The program is both comprehensive and practical—focused on
            real-world skills and aligned with industry best practices to
            deliver top-tier training. Her strong technical background and
            hands-on expertise make her a trusted voice in the React community
            and a core contributor to the React Certification.
          </p>
        </div>
      </div>
    </div>
  );
}
