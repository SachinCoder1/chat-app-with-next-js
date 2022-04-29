import React from "react";
import Left from "../components/messengerBody/left/Left";
import Sidebar from "../components/messengerBody/left/Sidebar";
import Right from "../components/messengerBody/right/Right";

const chat = () => {
  return (
    <div className="w-full relative min-h-screen bg-light-blue shadow-3xl flex">
      <div className="shadow-md rounded-tr-2xl rounded-br-2xl min-h-screen bg-main-blue">
        <Sidebar />
      </div>
      <div className="w-[30%] border-r-[1px] border-gray-400">
        <Left />
      </div>
      <div className="w-[70%]">
        <Right />
      </div>
    </div>
  );
};

export default chat;
