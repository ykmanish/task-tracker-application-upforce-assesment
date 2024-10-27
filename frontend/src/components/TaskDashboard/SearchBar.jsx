import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-lg"> {/* Set max-width for larger screens */}
        <input
          type="text"
          className="bg-white border placeholder:text-zinc-500 input input-bordered py-3 border-gray-300 text-gray-900 text-sm rounded-xl block pl-10 pr-3 w-full" 
          placeholder="Search here..."
          required
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          src="/search.svg"
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
