import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-4">
        <Link to="home" smooth={true} duration={500}>
          <BsFillArrowUpCircleFill className="h-6 w-6 bg-transparent cursor-pointer sm:h-8 sm:w-8 fill-white hover:fill-yellow-500 duration-300" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-neutral-500"></div>
        <span className="text-sm text-neutral-700">
          © Copyright 2022 Roman Krasnozhon
        </span>
      </div>
    </div>
  );
};

export default Footer;
