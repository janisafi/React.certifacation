import React from "react";
import { certificationData } from "./CertificationLevelData";

export default function CertificationLevel() {
  return (
    <section className="min-h-screen w-full bg-[#191919] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
          React Certification <span className="text-cyan-500">Levels</span>
        </h1>
        <div className="w-24 h-[3px] bg-cyan-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {certificationData.map((data, index) => {
          const WatchIcon = data.watchicon;
          const FileIcon = data.fileicon;

          return (
            <div
              key={index}
              className="bg-[#252529] backdrop-blur-lg  hover:shadow-2xl rounded-2xl p-10 flex flex-col gap-3 justify-between shadow-md hou  shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex  mb-6">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
                />
              </div>
{/* here we would start nothing but clear code wirh reaxt  */}
              <h2
                key={index}
                className={`text-xl sm:text-4xl font-semibold mb-4  ${
                  index === 0
                    ? "text-cyan-400"
                    : index === 1
                    ? "text-[#FF765D]"
                    : "text-green-400"
                }`}
              >
                {data.title}
              </h2>

              <div className="flex  text-lg text-gray-300 mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <WatchIcon className="text-cyan-400 text-4xl" />
                  <span>{data.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileIcon className="text-cyan-400 text-4xl" />
                  <span>{data.questions}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm hover:text-lg shadow-sm leading-relaxed mb-6 ">
                {data.phergraf}
              </p>

              <div className="flex ">
                <button
                  className={`px-6 py-2  text-white rounded-lg  border-2 font-semibold 
                  hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]
                  
                   ${
                     index === 0
                       ? "border-cyan-400"
                       : index === 1
                       ? "border-[#FF765D]"
                       : "border-green-400"
                   }`}
                >
                  {data.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
