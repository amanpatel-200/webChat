
import React from "react";
import { decryptMessage } from "../../utils/crypto";

const Message = ({ message }) => {
  const authuser = JSON.parse(localStorage.getItem("messenger")) || {};

  // Compare sender ID with logged-in user's ID
  const itsme =
    message.senderId?.toString() === authuser.id?.toString();

  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-400" : "bg-green-400";

  const createdAt = new Date(message.createdAt);

  const formatTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const hasImage = message.image && message.image.trim() !== "";

  return (
    <div className="pt-4">
      <div className={`chat ${chatName}`}>

        {hasImage ? (
          <img
            src={message.image}
            alt="shared"
            className="max-w-[250px] max-h-[300px] rounded-lg object-cover cursor-pointer"
            onClick={() => window.open(message.image, "_blank")}
          />
        ) : (
          <div className={`chat-bubble text-white ${chatColor}`}>
            <p>{decryptMessage(message.message)}</p>
          </div>
        )}

        <div className="chat-footer opacity-70 text-xs mt-1">
          {formatTime}
        </div>
      </div>
    </div>
  );
};

export default Message;

