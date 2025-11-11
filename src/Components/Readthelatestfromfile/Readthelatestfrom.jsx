import React from "react";
import { ReadthelatestfromDATA } from "../Constants/ReadthelatestfromData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Readthelatestfrom() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Read the latest from{" "}
          <span className="text-cyan-400">Certificates.dev</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ReadthelatestfromDATA.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0 }}
            className="bg-[#222222] rounded-3xl overflow-hidden shadow-lg  flex flex-col justify-between"
          >
            <div className="w-full h-full  overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold  mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.info}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <img
                    src={item.smimg}
                    alt="author"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <p className="text-sm text-gray-300">
                    {item.name || "Unknown Author"}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  {item.currentdate || new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="inline-flex items-center gap-2 bg-cyan-500 text-black font-medium py-3 px-6 rounded-full hover:bg-cyan-400 transition duration-300">
          See more articles <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
