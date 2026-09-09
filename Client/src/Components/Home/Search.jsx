import React, {  useState } from "react";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";
import useConversation from "../stateManage/useConversation";
import GetAllUser from "../Context/GetAllUser";

const Search = () => {
  const [search, setSearch] = useState("");
  const  [allUser] = GetAllUser();
  const { setSelectedConversation } = useConversation(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = allUser.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch(""); 
    } else {
      toast.error( "User are not found");
      setSearch("");
    }
  };
    
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-1 border-b border-slate-600">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 w-full">
          <label className="flex items-center gap-2 flex-1 bg-slate-900 border border-gray-700 rounded-lg px-3 py-2 min-w-0">
            <input
              type="search"
              required
              placeholder="Search..."
              value={search}                        
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
            />
          </label>

          <button className="shrink-0 p-2 sm:p-3 rounded-full hover:bg-gray-600 duration-300">
            <IoMdSearch className="text-2xl sm:text-3xl text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;