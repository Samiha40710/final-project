// src/components/Navbar/Mobile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

// Import Mega Menu Data
import { MegaMenuData } from "../../Data/MegaMenuData";

const menuData = {
  main: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  icons: [
    { icon: <MagnifyingGlassIcon className="w-6" />, link: "#" },
    { icon: <ShoppingCartIcon className="w-6" />, link: "#" },
    { icon: <HeartSolid className="w-6 text-red-500" />, link: "#" },
    { icon: <UserIcon className="w-6" />, link: "#" },
  ],
};

const foodMenuItems = [
  { name: "Fast Food", link: "/food-menu/fast-food" },
  { name: "Desi Food", link: "/food-menu/desi-food" },
  { name: "Snacks", link: "/food-menu/snacks" },
  { name: "Drinks", link: "/food-menu/drinks" },
  { name: "Shakes", link: "/food-menu/shakes" },
  { name: "Desserts", link: "/food-menu/desserts" },
  { name: "BBQ", link: "/food-menu/bbq" },
];

const Mobile = ({ open, active, setActive }) => {
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";
  const activeTextColor = "text-[rgb(245,130,32)]";
  const dropdownHoverBg = "hover:bg-[rgba(241,245,249,1)] hover:text-[rgb(245,130,32)]";

  const [openDropdowns, setOpenDropdowns] = useState({
    foodMenu: false,
    megaMenu: false,
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className={`md:hidden bg-white overflow-hidden shadow-md transition-all duration-300 ${
        open ? "max-h-[800px]" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col gap-4 p-4 font-medium">
        {/* Main Items */}
        {menuData.main.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer ${active === item.name ? activeTextColor : hoverTextColor}`}
            onClick={() => setActive(item.name)}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}

        {/* Food Menu */}
        <li>
          <button
            onClick={() => toggleDropdown("foodMenu")}
            className="flex justify-between w-full"
          >
            Food Menu <ChevronDownIcon className="w-5" />
          </button>

          {openDropdowns.foodMenu && (
            <ul className="pl-4 mt-2 flex flex-col gap-2 bg-white">
              {foodMenuItems.map((item) => (
                <li key={item.name} className={`cursor-pointer ${dropdownHoverBg}`}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Mega Menu */}
        <li>
          <button
            onClick={() => toggleDropdown("megaMenu")}
            className="flex justify-between w-full"
          >
            Mega Menu <ChevronDownIcon className="w-5" />
          </button>

          {openDropdowns.megaMenu && (
            <ul className="pl-4 mt-3 flex flex-col gap-4">
              {MegaMenuData.map((category) => (
                <li key={category.category}>
                  <h3 className="font-bold mb-1">{category.category}</h3>
                  <ul className="flex flex-col gap-1">
                    {category.items.map((item) => (
                      <li key={item.name} className={`cursor-pointer ${dropdownHoverBg}`}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Icons */}
        <div className="flex gap-5 mt-3">
          {menuData.icons.map((item, i) => (
            <Link key={i} to={item.link} className={`${hoverTextColor}`}>
              {item.icon}
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Mobile;
