import React from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="px-3 py-2 bg-transparent">
      <div className="flex items-center bg-white rounded-full">
        <span className="px-2">
          <BiSearch className="text-gray-500" />
        </span>
        <input
          className="bg-transparent outline-none text-gray-500 py-[3px]"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Search;
