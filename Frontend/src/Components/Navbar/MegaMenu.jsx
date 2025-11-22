// src/components/MegaMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MegaMenuData } from "../../Data/MegaMenuData";

const MegaMenu = () => {
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";

  return (
    <li className="relative group cursor-pointer">
      <div className={`flex items-center gap-1 cursor-pointer ${hoverTextColor}`}>
        <Link to="/megamenu">Mega Menu</Link>
        <ChevronDownIcon className="w-4" />
      </div>

      {/* Mega Menu Dropdown */}
      <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 grid grid-cols-3 bg-white shadow-xl p-6 gap-10 rounded-md 
                      min-w-[600px] z-50">
        {MegaMenuData.map((category) => (
          <div key={category.category}>
            <h3 className="font-bold mb-2">{category.category}</h3>
            {category.items.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`block cursor-pointer ${hoverTextColor}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </li>
  );
};

export default MegaMenu;
