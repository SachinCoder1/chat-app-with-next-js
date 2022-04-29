import React, { useEffect, useState } from "react";
import Header from "./Header";
import MessageBody from "./Messages";
import { messages } from "../../../data/Data";

function Right() {
  const [conversation, setconversation] = useState();
  useEffect(() => {
    setconversation(messages);
  }, []);

  return (
    <div>
      <Header />
      <MessageBody conversation={conversation} />
    </div>
  );
}

export default Right;
