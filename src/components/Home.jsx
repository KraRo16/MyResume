import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import headerBackground from "../assets/header-background.webp";
import style from "../";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          ROMAN KRASNOZHON
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a6adc5]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#a6adc5] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white ease-linear duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
