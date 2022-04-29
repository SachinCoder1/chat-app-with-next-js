import React from "react";
import { menu } from "../../../data/Data";

function Sidebar({  }) {
  return (
    <div className="px-1 py-4">
      <ul className="relative group">
      {
       menu?.map(({name, link, Icon},index)=>(
        <li key={index+name} className="relative">
          <a
            className="flex gap-x-2 items-center text-sm py-2 h-10 w-full pl-3 pr-4 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href={link}
          >
          <Icon className="text-2xl" />
            <span className="hidden group-hover:inline-block">{name}</span>
          </a>
        </li>
       ))
      }
      </ul>
    </div>
  );
}

export default Sidebar;
