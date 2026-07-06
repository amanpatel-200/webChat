import React from "react";
import useConversation from "../stateManage/useConversation";
import { useContext } from "react";
import { socketContext } from "../Context/SocketContext";
const User = ({user}) => {
  const{selectedConversation,setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id
  const{online} = useContext(socketContext);
  const isOnline = online.includes(user._id);
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`}
     onClick={()=>setSelectedConversation(user)}
    >
    <div className="text-white flex space-x-4 px-4 py-3 my-1">
      <div className={`avatar ${isOnline?"avatar-online":" "}` }>
        <div className="w-14 rounded-full">
          <img src={user.profilePic} />
        </div>
      </div>

      <div className="text-white">
        <h1 className="font-bold">{user.name}</h1>
        <span>{user.bio}</span>
      </div>
    </div>
    </div>
  );
};

export default User;
