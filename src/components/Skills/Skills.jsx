import React from "react";

import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import SQL from "../../assets/sql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-neutral-800 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
            <div className="flex m-4">
              <span className="ml-2 text-sm font-medium"></span>
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `85%` }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Css icon" />
            <p className="my-4">CSS</p>
            <div className="flex m-4">
              <span className="ml-2 text-sm font-medium"></span>
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `85%` }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
            <div className="flex m-4">
              <span className="ml-2 text-sm font-medium"></span>
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `65%` }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="mt-4">REACT</p>
            <span className="flex justify-center m-4 text-sm font-medium">
              In progress...
            </span>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GITHUB</p>
            <div className="flex m-4">
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `70%` }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
            <span className="flex justify-center m-4 text-sm font-medium">
              In progress...
            </span>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
            <div className="flex m-4">
              <span className="ml-2 text-sm font-medium"></span>
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `55%` }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p className="my-4">SQL</p>
            <div className="flex m-4">
              <span className="ml-2 text-sm font-medium"></span>
              <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{ width: `35%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
