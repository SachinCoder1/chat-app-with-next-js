import React from 'react'

function MessageBody({message}) {

    return (
      <div className="mb-2">
        <div
          className={`${
            message.you ? "ml-auto bg-main-blue text-white" : "mr-auto bg-light-blue text-black"
          } px-3 py-1.5 rounded-xl mx-1 flex justify-between w-fit max-w-[35%] text-[15px]`}
        >
          <p className="">{message.newMessage}</p>
          <span className={`px-3 text-gray-500 text-[12px] ${message.you? "text-gray-200": "text-gray-500"}`}>5:49 AM</span>
        </div>
      </div>
    );
}

export default MessageBody
