import React from "react";
//import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-8">
      <img
        className="w-36 h-36 rounded-full mb-6 shadow-lg"
        //src={assets.header_img}
        alt="User Header"
      />
    </div>
  );
};

export default Header;
