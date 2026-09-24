import React from "react";

function Projects() {
  return (
    <div className="bg-brand-bg h-screen w-screen  items-center ">
        {/* heading div */}
      <div className=" w-full h-[50%] flex flex-col justify-end py-8 px-10">
        <span className="text-neon font-mono p-5">SELECTED PROJECTS</span>
        <p className="text-7xl text-brand-white font-jakarta p-5">Interfaces built with <br /> <span className="text-neon">precision</span> and <span className="text-neon">modern code</span>.</p>
        <p className="text-xl text-brand-white p-5">
          A showcase of interactive web applications and UI designs built with
          React, Tailwind CSS, and modern JavaScript. <br /> Focused on clean state
          handling, modular components, and seamless user experiences.
        </p>
      </div>
      <div className="h-[50%] w-full flex justify-evenly items-center ">
        <div className="w-[20%] h-[75%] rounded-4xl border flex items-center justify-center ">akshat</div>
        <div className="w-[20%] h-[75%] rounded-4xl border flex items-center justify-center">akshat</div>
        <div className="w-[20%] h-[75%] rounded-4xl border flex items-center justify-center">akshat</div>
        <div className="w-[20%] h-[75%] rounded-4xl border flex items-center justify-center">akshat</div>
        
      </div>
    </div>
  );
}

export default Projects;
