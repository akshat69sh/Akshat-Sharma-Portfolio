import React from "react";
import Navlinks from "../ui/Navlinks";

function Header() {
  return (
   <div className="md:flex justify-between w-screen p-4 border border-white/15 bg-black/50 backdrop-blur-5xl fixed top-0 z-50 px-10 py-3 my-3  ">
    {/* name div */}
    <div className="w-[50%] flex gap-5 justify-center items-center" >
      <span className="text-2xl text-brand-white font-jakarta font-bold hover:text-neon">Akshat-Sharma</span>
      <span className="font-space text-brand-gray "> [WEB DEVELOPER] </span>
    </div>
    {/* navlink div */}
    <div className="w-[50%] text-brand-gray">
      <Navlinks/>
    </div>
   </div>
  );
}

export default Header;
