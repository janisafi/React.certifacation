import React, { useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { HiMiniTrophy } from "react-icons/hi2";
import {
  chooseyourLevel,
  paymentIMG,
} from "../../Components/Constants/ChooseLevel";
import { BsBookmarkCheckFill } from "react-icons/bs";

export default function ChooseYourLevel() {
  const [selected, setSelected] = useState("Junior");
  const [activeCard, setActiveCard] = useState(null);

  const getButtonColor = (level) => {
    if (selected === level) {
      if (level === "Junior") return "bg-[#4A9EB2] text-black";
      if (level === "Mid-Level") return "bg-[#D36552] text-black";
      if (level === "Senior") return "bg-[#2BA67B] text-black";
    }
    return "bg-[#252529] text-white";
  };

  const handleToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const gradientColors = {
    Junior: "from-[#4A9EB2]/20 to-[#252529]",
    "Mid-Level": "from-[#D36552]/20 to-[#252529]",
    Senior: "from-[#2BA67B]/20 to-[#252529]",
  };

  return (
    <>
      <section className=" bg-[#1a1a1a] text-center px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Choose Your <span className="text-sky-400">Level</span>
        </h1>
        <div className="flex items-center justify-center bg-[#252529] rounded-full p-1 sm:p-2 mx-auto mb-12 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[70%] xl:h-[70px] max-w-[1200px]">
          {["Junior", "Mid-Level", "Senior"].map((level) => (
            <button
              key={level}
              onClick={() => {
                setSelected(level);
                setActiveCard(null);
              }}
              className={`flex-1 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300
        py-2 sm:py-3 xl:h-full
        ${getButtonColor(level)}`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="flex flex-row justify-center items-start gap-8  max-w-7xl mx-auto overflow-hidden">
          {chooseyourLevel[selected].map((plan, idx) => (
            <div
              key={idx}
              className={`relative w-full sm:w-[340px] mt-10 rounded-3xl p-6 sm:p-8 bg-gradient-to-b ${
                plan.best
                  ? gradientColors[selected] +
                    " border border-sky-400 shadow-lg shadow-sky-400/20"
                  : gradientColors[selected]
              } `}
            >
              {plan.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-400 text-black font-semibold px-4 py-1 rounded-full flex items-center gap-2 text-sm">
                  <HiMiniTrophy /> BEST VALUE
                </div>
              )}

              <h3 className="text-sm text-sky-400 font-medium">{selected}</h3>
              <h2 className="text-2xl font-bold text-white mt-2">
                {plan.title}
              </h2>

              <div className="main-for-button flex items-center justify-center gap-3 mt-4">
                <h1 className="text-white text-sm sm:text-base">Individuals</h1>

                <div
                  onClick={() => handleToggle(idx)}
                  className={`relative w-14 h-8 rounded-full flex items-center cursor-pointer transition-all duration-300 ${
                    activeCard === idx
                      ? "bg-sky-400 justify-end"
                      : "bg-gray-700 justify-start"
                  }`}
                >
                  <div className="w-6 h-6 bg-white rounded-full shadow-md mx-1 transition-all duration-300" />
                </div>

                <h1 className="text-white text-sm sm:text-base">Teams</h1>
              </div>

              <p className="text-4xl font-bold text-white my-4">{plan.price}</p>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
                  plan.best
                    ? "bg-sky-400 text-black"
                    : "bg-transparent border border-gray-600 text-white"
                }`}
              >
                Buy Now →
              </button>

              <ul className="text-left text-gray-300 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-sky-400" />
                      <span>{f}</span>
                    </div>
                    <FaInfoCircle className="text-gray-500" />
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-sky-400 font-medium cursor-pointer">
                Learn more +
              </div>
            </div>
          ))}
        </div>
        <div className="Main-for-payment-method xl:flex xl:justify-center xl:items-center xl:gap-12 container pt-4">
          <div className="payments-and-check md:flex md:items-center md:justify-center md:gap-5">
            <div className="icon flex justify-center md:pt-4">
              <BsBookmarkCheckFill className="text-[#959DAB]" size={30} />
            </div>
            <div className="info text-center text-[#959DAB] pt-3 md:text-lg ">
              <p className="xl:w-[500px]">
                Payments are 100% securely handled by Chargebee
              </p>
            </div>
          </div>

          <div className="Main-for-IMG flex items-center justify-center gap-3 container pt-3">
            {paymentIMG.map((data, index) => (
              <div key={index}>
                <img
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                  src={data.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
