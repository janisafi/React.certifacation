import React from "react";
import { pricingdata } from "../Constants/PricingData";

export default function Pricing() {
  return (
    <section className="min-h-screen w-full bg-[#191919] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl  font-bold mb-14">
          <span className="text-cyan-500">Pricing</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto">
          Get your React Certification now during the launch and enjoy these
          benefits:
        </p>
      </div>

      <div className="flex gap-10 justify-center overflow-hidden pb-4 snap-x snap-mandatory">
        {pricingdata.map((data, index) => {
          const Icon = data.icon;
          const Plus = data.lasticon;

          return (
            <div
              key={index}
              className="flex-shrink-0 w-52 sm:w-52 md:w-52 lg:w-72 bg-[#252529]  rounded-2xl p-6 flex flex-col  items-center text-center shadow-lg  hover:shadow-[#00ffff44] "
            >
              {Icon && (
                <Icon className="text-5xl hover:text-6xl text-cyan-400 mr-52 mb-4" />
              )}

              <h2 className="text-2xl font-semibold mb-5">{data.title}</h2>

              <p className="text-gray-300 text-base hover:text-lg leading-relaxed mb-4">
                {data.pergeraf}
              </p>

              {Plus && (
                <Plus className="text-4xl mr-60 hover:text-5xl text-cyan-400 mt-auto" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
