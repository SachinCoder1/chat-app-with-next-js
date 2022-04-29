import React from 'react'
import { MdMessage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

function Header() {
    return (
      <div className="bg-light-blue flex justify-between items-center px-5 py-2">
        <div className="flex items-center">
          <div>
            <img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="image"
              className="w-[40px] object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-[17px] text-gray-900 px-3">
             Laura marano
            </p>
            <p className="text-gray-400 text-[13px] px-3">
                Online
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <MdMessage className="cursor-pointer text-gray-600 text-[20px] mx-5" />{" "}
          <BiSearch className="cursor-pointer text-gray-600 text-[20px]" />
        </div>
      </div>
    );
}

export default Header
