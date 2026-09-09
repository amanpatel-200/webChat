import React from "react";
import { MdGroupAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const GroupChat = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="mb-5 p-3 rounded-xl hover:bg-gray-700 duration-300"
        onClick={() => navigate("/createGroup")}
      >
        <MdGroupAdd size={24} />
      </button>
    </>
  );
};

export default GroupChat;