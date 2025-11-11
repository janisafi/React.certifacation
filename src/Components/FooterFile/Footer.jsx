import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import { PiButterflyBold } from "react-icons/pi";
import { SiReact } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-14 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-16">
        <div className="space-y-6">
          <div className="flex flex-col   gap-2">
            <SiReact className="text-sky-400 mb-10 text-8xl" />

            <h1 className="text-sky-400 text-5xl font-semibold">
              Certification of competence for React
            </h1>
          </div>

          <div>
            <p className="text-xl mb-4 text-gray-400">
              Reach out on Social Media
            </p>
            <div className="flex gap-4 text-2xl text-gray-300">
              <a
                href="#"
                className="hover:text-sky-400 text-6xl transition-all"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 text-6xl transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 text-6xl transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 text-6xl transition-all"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 text-6xl transition-all"
              >
                <PiButterflyBold />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 text-sm">
          <ul className="space-y-3 text-2xl">
            <li className="hover:text-sky-400 transition-colors cursor-pointer">
              Steps to Certification
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer">
              Certificates
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
              Cast your Vote <span className="text-xs">↗</span>
            </li>
          </ul>

          <ul className="space-y-3 text-2xl">
            <li className="hover:text-sky-400 transition-colors cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
              Terms & Conditions <span className="text-xs">↗</span>
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
              Privacy Policy <span className="text-xs">↗</span>
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
              Help Center <span className="text-xs">↗</span>
            </li>
            <li className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
              Blog <span className="text-xs">↗</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
