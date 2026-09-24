import React from "react";
import { Mail,Phone,MapPin } from "lucide-react";

function Contact() {
  return (
    <div className="h-screen w-screen flex ">
      {/* left div */}
      <div className="h-full w-[50%]  flex justify-evenly p-5 gap-6 flex-col">
        <div className="flex flex-col gap-2  ">
            <span className="text-neon text-lg font-mono">Contact</span>
        <span className="text-5xl font-jakarta font-extrabold">Let's build something.</span>
        <p className="text-2xl font-mono text-brand-gray">
          “Have an internship opportunity, a project idea, or just want to chat
          about React and frontend development? My inbox is always open — I’ll
          get back to you within 24 hours.”
        </p>
        </div>
       <div className="flex flex-col text-brand-white gap-3">
         {/* mail */}
        <div className="inline-flex gap-5 items-center hover:text-neon hover:cursor-pointer w-fit">
            <span className="border rounded-full p-1.5 "><Mail strokeWidth={1.5} /></span>
            <span>akshatmsh69@gmail.com</span>
        </div>
        {/* phone */}
        <div className="inline-flex gap-5 items-center hover:text-neon hover:cursor-pointer w-fit">
            <span className="border rounded-full p-1.5 "><Phone strokeWidth={1.5} /></span>
            <span>+91-99813-20069</span>
        </div>
        {/* address */}
        <div className="inline-flex gap-5 items-center">
            <span className="border rounded-full p-1.5 "><MapPin strokeWidth={1.5} /></span>
            <span>Vijay Nagar, Indore, Madhya Pradesh</span>
        </div>
       </div>
      </div>
      {/* right div */}
      <div className="h-full w-[50%] "></div>
    </div>
  );
}

export default Contact;
