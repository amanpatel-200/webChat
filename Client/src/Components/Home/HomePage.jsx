import { useEffect } from "react";
import Search from "./Search";
import chatLogo from "../assets/chatLogo1.png";
import Users from "./Users";
import Logout from "./Logout";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Typing from "./Typing";
import useConversation from "../stateManage/useConversation";
import NochatUse from "./NochatUse";
import GroupChat from "./GroupChat";

const HomePage = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // reset chat on reload
  useEffect(() => {
    setTimeout(() => setSelectedConversation(null), 100);
  }, []);

  return (
    <div className="drawer lg:drawer-open h-screen overflow-hidden">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= MAIN CHAT AREA ================= */}
      <div className="drawer-content flex flex-col h-screen overflow-hidden">

        {/* 📱 MOBILE NAVBAR */}
        <div className="navbar bg-black text-white lg:hidden">
          <label htmlFor="mobile-drawer" className="btn btn-ghost text-2xl">
            ☰
          </label>
          <h1 className="font-bold text-lg ml-2">
            Safe <span className="text-green-600">Talk</span>
          </h1>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 bg-slate-950 text-white flex flex-col overflow-hidden">
          {!selectedConversation ? (
            <div className="flex-1 flex items-center justify-center">
              <NochatUse />
            </div>
          ) : (
            <>
              <ChatUser />

              {/* scrollable messages */}
              <div className="flex-1 overflow-y-auto scroll-smooth">
                <Messages />
              </div>

              <Typing />
            </>
          )}
        </div>

      </div>

      {/* ================= SIDEBAR (USERS) ================= */}
      <div className="drawer-side z-50 h-full">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>

        <div className="bg-black text-white w-82 h-full flex">

          {/* logout column */}
          <div className="w-14 border-r border-gray-800 flex flex-col justify-between items-center py-4">  
            <GroupChat/>
            <Logout />
          </div>
         

          {/* users column */}
          <div className="flex-1 flex flex-col h-full">
            <img src={chatLogo} alt="logo" className="h-12 p-3 object-contain" />
            <Search />

            {/* scroll users list */}
            <div className="flex-1 overflow-y-auto">
              <Users />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;