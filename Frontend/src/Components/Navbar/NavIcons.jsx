import React from "react";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import avarter from '../../assets/images/avatar.png';

const NavIcons = () => {
  const hoverTextColor = "hover:text-[rgb(245,130,32)]";

  return (
    <div className="hidden md:flex items-center gap-5 relative">

      {/* Search Icon */}
      <MagnifyingGlassIcon className={`w-6 cursor-pointer ${hoverTextColor}`} />

      {/* Cart Icon */}
      <ShoppingCartIcon className={`w-6 cursor-pointer ${hoverTextColor}`} />

      {/* Wishlist Icon */}
      <HeartSolid className="w-6 text-red-500 cursor-pointer" />

      {/* User Avatar */}
      <div className="relative group">
        {/* Avatar Image (Bada aur border hata diya) */}
        <img
          src={avarter}
          alt="User Avatar"
          className="w-12 h-12 rounded-full cursor-pointer object-cover
                     transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />

        {/* Dropdown */}
        <ul className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-50 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-200">
          
          {/* Login */}
          <Link to="/login">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 18 16"
                height="16"
                width="16"
              >
                <path d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
              </svg>
              Login
            </li>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <ShoppingCartIcon className="w-5" /> Cart
            </li>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <HeartSolid className="w-5 text-red-500" /> Wishlist
            </li>
          </Link>

          {/* Logout */}
          <Link to="/logout">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="16"
                width="16"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavIcons;
