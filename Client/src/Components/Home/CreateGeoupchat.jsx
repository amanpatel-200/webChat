import React, { useEffect, useState } from "react";
import GetAllUser from "../Context/GetAllUser";

const CreateGeoupchat = () => {
  const [search, setSearch] = useState("");
  const [allUser] = GetAllUser();

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Search after user stops typing
  useEffect(() => {
    if (!search.trim()) {
      setUsers([]);
      return;
    }

    const timer = setTimeout(() => {
      const result = allUser.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setUsers(result);
    }, 500);

    // Cancel previous timer when user types again
    return () => clearTimeout(timer);
  }, [search, allUser]);

  // Select / remove user
  const handleSelectUser = (user) => {
    setSelectedUsers((prev) => {
      const alreadySelected = prev.some(
        (selected) => selected._id === user._id
      );

      if (alreadySelected) {
        return prev.filter((selected) => selected._id !== user._id);
      }

      return [...prev, user];
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] bg-slate-900 p-6 rounded-xl">

        {/* Group Name */}
        <div className="flex flex-col gap-2 mb-6">
          <label
            htmlFor="gname"
            className="text-gray-300 font-medium"
          >
            Group Name
          </label>

          <input
            type="text"
            id="gname"
            name="groupName"
            placeholder="Enter Group Name"
            className="h-11 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white outline-none"
          />
        </div>

        {/* Search User */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="search"
            className="text-gray-300 font-medium"
          >
            Add Users
          </label>

          <input
            type="text"
            id="search"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white placeholder-gray-400 outline-none focus:border-pink-500"
          />
        </div>

        {/* Search Results */}
        {users.length > 0 && (
          <div className="mt-3 bg-slate-800 rounded-lg overflow-hidden">
            {users.map((user) => {
              const isSelected = selectedUsers.some(
                (selected) => selected._id === user._id
              );

              return (
                <div
                  key={user._id}
                  onClick={() => handleSelectUser(user)}
                  className="flex items-center justify-between p-3 hover:bg-slate-700 cursor-pointer"
                >
                  <span className="text-white">
                    {user.name}
                  </span>

                  <span className="text-sm text-pink-400">
                    {isSelected ? "Selected" : "Add"}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* No User Found */}
        {search && users.length === 0 && (
          <p className="text-gray-400 text-sm mt-3">
            User not found
          </p>
        )}

        {/* Selected Users */}
        {selectedUsers.length > 0 && (
          <div className="mt-5">
            <h3 className="text-gray-300 mb-2">
              Selected Members
            </h3>

            <div className="flex flex-wrap gap-2">
              {selectedUsers.map((user) => (
                <span
                  key={user._id}
                  className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {user.name}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CreateGeoupchat;