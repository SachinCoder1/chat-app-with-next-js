import React, { useContext } from "react";

function PeopleBody({ imageUrl, name, googleId, people }) {


  return (
    <div className="flex items-center py-3 pl-4 cursor-pointer hover:scale-95 transition-all duration-150 hover:bg-white hover:shadow-lg shadow-gray-400 mt-1">
      <img
        src="https://randomuser.me/api/portraits/women/81.jpg"
        className="w-[40px] rounded-full"
        alt="person img"
      />
      <div className="text-gray-700 text-[16px] px-2">Laura Marano</div>
    </div>
  );
}

export default PeopleBody;
