import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className=" flex justify-center items-center w-full">
      <div className="relative inset-y-0 left-8 start-0 flex items-center  pointer-events-none">
        <img src="/search.svg" alt="search" className="w-4 h-4" />
      </div>
      <input
        type="text"
        className="bg-white lg:w-80   border placeholder:text-zinc-500 small input input-bordered py-3 border-gray-300 text-gray-900 text-sm rounded-xl block ps-10 p-2.5"
        placeholder="Search here..."
        required
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
