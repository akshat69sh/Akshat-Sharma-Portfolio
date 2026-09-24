import { Link } from "react-router-dom";
import Projects from "../Sections/Projects";


function Navlinks() {
  return (
    <div className="w-full flex items-center justify-evenly h-full">
      <Link className="hover:text-neon " to="/Aboutme">
        About
      </Link>

      <Link className="hover:text-neon " to="/Projects">
        Projects
      </Link>
      <Link className="hover:text-neon " to="/Contact">
        Contact
      </Link>
    </div>
  );
}

export default Navlinks;
