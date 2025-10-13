import React from "react";
import { ResearchData } from "./ResearchAchievii";

export default function Researchachieving() {
  return (
    <section className="w-full bg-[#191919] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Research shows <span className="text-cyan-400">clear interest</span>{" "}
          in achieving certification
        </h1>
        <p className="text-gray-400 max-w-4xl mx-auto">
          We received more than 2,300 responses from React Developers to a
          pre-launch survey conducted about the Certification Program.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8 justify-items-center">
        {ResearchData.map(({ id, icon: Icon, number, paragraph }) => (
          <div
            key={id}
            className="bg-[#252529] rounded-2xl shadow-lg w-80 h-80 py-10 px-6 flex flex-col text-center  "
          >
            <Icon className="w-20 h-20 mb-3 text-[#58C4DC]" />
            <h2 className="font-bold text-cyan-500 mb-10 text-5xl">{number}</h2>
            <p className="text-gray-400 mt-2 text-sm">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
