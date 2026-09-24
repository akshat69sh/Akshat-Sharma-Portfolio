import React from "react";
import Button from "../ui/Button";
import { MoveRight, MoveUpRight } from "lucide-react";

function AboutMe() {
  return (
    <div className="bg-brand-bg h-screen w-screen flex justify-center items-center ">
      {/* left div */}
      <div className="w-[50%] h-full bg-neon ">
        {/* top div */}
        <div className="h-[50%] w-full flex justify-between  ">
          <div className="flex flex-col w-[50%] items-center justify-center gap-6">
            <span className="text-black/90 text-7xl font-black select-none top-40  font-mono ">
            PORTFOLIO
          </span>
            <span className="text-black/70 text-7xl font-black select-none top-40  font-mono ">
            PORTFOLIO
          </span>
            <span className="text-black/50 text-7xl font-black select-none top-40  font-mono ">
            PORTFOLIO
          </span>
            <span className="text-black/30 text-7xl font-black select-none top-40  font-mono ">
            PORTFOLIO
          </span>
            <span className="text-black/10 text-7xl font-black select-none top-40  font-mono ">
            PORTFOLIO
          </span>
          </div>
          
          <span className="flex justify-center items-center mt-20 bg-brand-bg h-fit left-120 text-3xl  text-neon  ">
            OPEN FOR INTERNSHIPS
          </span>
        </div>
        {/* bottom div */}
        <div className="flex flex-row justify-between ">
          {/* sub left div */}
          <div className="flex justify-center items-center h-full">
            {/* photo frame */}
            <div className="h-100 w-100 bg-brand-white mx-13 -rotate-8">
              <div className="w-full h-full -rotate-8">
                <img
                  className=" h-full w-full object-cover"
                  src="/Images/profile.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* sub right div */}
          <div className="flex flex-col  justify-center items-center text-brand-bg m-10">
            <span className="font-jakarta font-extrabold text-4xl m-1.5 ">
              AKSHAT-SHARMA
            </span>
            <span className="font-jakarta text-2xl gap-1 m-1.5">
              MERN Stack Developer
            </span>
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="flex flex-col justify-center p-15 w-[50%]">
        <p className="text-brand-white text-5xl font-mono p-3">
          Building dynamic full-stack applications with the MERN stack — from
          intuitive UI to reliable server logic.
        </p>
        <p className="text-gray-400 text-xl p-3 font-space leading-7">
          Full-stack web developer working across React, Node.js, Express, and
          MongoDB. Enthusiastic about creating fast, responsive products and
          always eager to take on challenging problems in a collaborative team.
          Currently seeking internship and junior developer roles.
        </p>
        <div className="inline-flex gap-6 p-2.5">
          <Button
            label="Projects"
            icon={<MoveRight size={16} />}
            href="#resume"
          />
          <Button
            label=" GitHub "
            icon={<MoveUpRight size={16} />}
            href="https://github.com/akshat69sh"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
