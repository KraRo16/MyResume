import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { BsTelegram, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-4">
        <Link to="home" smooth={true} duration={500}>
          <BsFillArrowUpCircleFill className="h-6 w-6 bg-transparent cursor-pointer hover:scale-125 sm:h-8 sm:w-8 fill-white hover:fill-yellow-500 duration-300" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-neutral-500">
          <ul className=" flex justify-center h-5 w-5 align-baseline sm:h-8 sm:w-8 ">
            <li>
              <a
                href="https://telegram.me/mwd_roman"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram
                  size={30}
                  className="fill-white hover:fill-blue-500 hover:scale-150 duration-300"
                />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/393896660897"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp
                  size={30}
                  className="fill-white hover:fill-green-500 hover:scale-150 duration-300"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KraRo16"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  size={30}
                  className="fill-white hover:fill-yellow-500 hover:scale-150 duration-300"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mywaytothedream_11?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram
                  size={30}
                  className="fill-white hover:fill-pink-400 hover:scale-150 duration-300"
                />
              </a>
            </li>
          </ul>
        </div>
        <span className="text-sm text-neutral-700">
          © Copyright 2022 Roman Krasnozhon
        </span>
      </div>
    </div>
  );
};

export default Footer;
