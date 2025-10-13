import React from "react";
import { examinarion1, examinarion2 } from "../../assets/Imges";
import { LuNotebookPen } from "react-icons/lu";

export default function Examination() {
  return (
    <section className="bg-[#1A1A1A] text-white flex justify-center items-center py-20 px-6">
      <div className="w-full max-w-[1250px] bg-[#252529] rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-10">
          {/* Step Info */}
          <div className="flex flex-col items-start -translate-y-2 group transition-all duration-300">
            <h3
              className="text-cyan-500 text-2xl  md:text-3xl font-bold mb-8
              group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_#00ffff]
              transition-all duration-300"
            >
              STEP 3
            </h3>
            <LuNotebookPen
              className="text-cyan-400 w-8 h-8 md:w-12 md:h-12 
              group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_10px_#00ffff]
              transform group-hover:-translate-y-1 transition-all duration-300"
            />
          </div>

          <div className="mt-4 sm:mt-0 flex-1">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Take Examination
            </h1>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Take the certification online proctored exam, which will consist
              of both multiple-choice questions and practical coding exercises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={examinarion1}
            alt="Examination step visual 1"
            className="rounded-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />
          <img
            src={examinarion2}
            alt="Examination step visual 2"
            className="rounded-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
