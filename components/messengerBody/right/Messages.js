import React, { useState, useContext, useEffect, useRef } from "react";
import { messages } from "../../../data/Data";
import Input from "./Input";
import MessageBody from "./MessageBody";

function Messages({ conversation }) {
  const [text, settext] = useState("");
      const handleClick = () => {
        console.log(text);
      };
  return (
    <>
      <div
        id="divScroll"
        className="bg-white shadow-lg mt-5 relative shadow-gray-200 w-[95%] mx-auto bg-cover bg-center h-[85vh] py-3 px-1 overflow-y-auto"
      >
        {messages.map((message) => {
          return <MessageBody message={message} />;
        })}

        {/* <input className="bg-light-blue absolute bottom-3 w-[98%] px-3 py-4 outline-main-blue rounded-full border-[1px] border-gray-200" type="text" placeholder="Message..." name="" id="" /> */}
        <div className="absolute bottom-2">
          <Input handleClick={handleClick} text={text} settext={settext} />
        </div>
      </div>
    </>
  );
}

export default Messages;
