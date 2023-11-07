import React from "react";

interface SearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  return (
    <div className="flex justify-between relative">
      <form action="">
        <input
          type="text"
          onChange={(e) => onSearch(e)}
          className="w-full border-slate-200 border-2 rounded-lg py-1 placeholder: pl-2 pr-7"
          placeholder="Search"
        />
      </form>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-1 top-[50%] translate-y-[-50%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
