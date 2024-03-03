"use client";
import React from "react";

const SearchInput = ({setSearch}) => {


  return (
    <div className="m-auto w-1/2 mt-5 flex justify-center items-center">
      <input
        type="text"
        className="outline-none border-2 w-[300px] h-[40px] p-6 rounded-md focus:ring-green-200"
        placeholder="Enter name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className=" w-[80px] h-[40px] text-white bg-blue-500 rounded-md ml-2 hover:bg-blue-800 font-medium">
        Search
      </button>
  
    </div>
  );
};

export { SearchInput };
