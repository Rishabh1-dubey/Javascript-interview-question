import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl  font-bold">E-Commerce Filter</h1>
      <input
        className="py-4 px-4 border border-gray-600 mx-12 mt-2"
        type=" text"
        placeholder="Enter your product"
      />
    </div>
  );
};

export default Header;
