import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FoodMenu = () => {
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";
  const dropdownHoverBg =
    "hover:bg-[rgba(241,245,249,1)] hover:text-[rgb(245,130,32)]";

  return (
    <li className="relative group cursor-pointer">
      <div className={`flex items-center gap-1 cursor-pointer ${hoverTextColor}`}>
        <Link to="/food-menu">Food Menu</Link>
        <ChevronDownIcon className="w-4" />
      </div>

      <ul className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white text-gray-900 shadow-lg p-4 w-40 rounded-md z-50">
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/fast-food">Fast Food</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/desi-food">Desi Food</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/drinks">Drinks</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/deserts">Deserts</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/snacks">Snacks</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/shakes">Shakes</Link>
        </li>
        <li className={`p-2 ${dropdownHoverBg} cursor-pointer`}>
          <Link to="/food-menu/bbq">BBQ</Link>
        </li>
      </ul>
    </li>
  );
};

export default FoodMenu;