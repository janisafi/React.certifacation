import React from "react";
import { boardalain } from "../../assets/Imges";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: `The training and preparation to take the React exam as well as the coding challenges are well-crafted for each level of users. Kudos to the whole team who built the end-to-end learning, training and examination. The long thoughtful process of everything paid off. I highly recommend the certification to everyone who needs a proof of their ability.`,
      name: "Devlin Duldulao",
      role: "React Expert & Microsoft MVP in Web Technologies",
      img: boardalain,
    },
    {
      text: `Participating in this certification program has significantly deepened my understanding of React. While I had prior experience with the framework, the program clarified some advanced concepts like hooks, context API, and performance optimization techniques. One of the most valuable aspects of the exam experience was the way it tested practical, real-world React knowledge rather than just theoretical understanding. The questions were scenario-based, which pushed me to think critically and apply concepts like component lifecycle, state management, and hooks in context. I also appreciated the balance between multiple-choice questions and code-based problem solving, as it provided a more complete assessment of my skills. Overall, the exam felt like a true reflection of what a React developer needs to know to build production-ready applications. It’s made me a more confident and efficient React developer.`,
      name: "Abdallah Labib Hamdan",
      role: "Frontend Developer at ACS Techs",
      img: boardalain,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Testimonials
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-[#222222]  rounded-3xl p-8 flex flex-col justify-between shadow-lg"
          >
            <div className="text-cyan-400 text-9xl font-serif ">“</div>

            <p className="text-gray-300 leading-relaxed mb-8">{t.text}</p>

            <div className="flex items-center gap-3 mt-auto">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover "
              />
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
