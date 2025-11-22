import React, {useState} from "react";
import { Link } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import MegaMenu from "./MegaMenu";

const Menu = () => {
  const [active, setActive] = useState("Home");
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";
  const activeTextColor = "text-[rgb(245,130,32)]";
 

  return (
    <ul className="hidden md:flex items-center gap-6 font-medium relative">
      <li
        className={`cursor-pointer ${active === "Home" ? activeTextColor : hoverTextColor}`}
        onClick={() => setActive("Home")}
      >
        <Link to="/">Home</Link>
      </li>

      {/* Dishes */}
        <FoodMenu />

      {/* Mega Menu */}
        <MegaMenu />

      <li
        className={`cursor-pointer ${active === "Admin" ? activeTextColor : hoverTextColor}`}
        onClick={() => setActive("Admin")}
      >
        <Link to="/about">About</Link>
      </li>

      <li
        className={`cursor-pointer ${active === "Admin" ? activeTextColor : hoverTextColor}`}
        onClick={() => setActive("Admin")}
      >
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;