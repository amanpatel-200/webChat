import React from "react";
import { decryptMessage } from "../../utils/crypto";

const Message = ({ message }) => {
  const authuser = JSON.parse(localStorage.getItem("messenger")) || {};
 
  const itsme = message.senderId ===  authuser._id;

  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-400" : "bg-green-400";

  const createdAt = new Date(message.createdAt);

  const formatTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="pt-4">
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>

          {/* Text Message */}
          {message.message && (
            <p>{decryptMessage(message.message)}</p>
          )}

          {/* Image Message */}
          {message.image && (
            <img
              src={message.image}
              alt="shared"
              className="max-w-62.5 max-h-75 rounded-lg mt-2 object-cover cursor-pointer "
              onClick={() => window.open(message.image, "_blank")}
            />
          )}

        </div>

       <div className="chat-footer opacity-70 text-xs mt-1">
    {formatTime}
  </div>
      </div>
    </div>
  );
};

export default Message;