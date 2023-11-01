import React, { useEffect, useState } from "react";
import "./Search.css";

interface SearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  return (
    <div className="search-container">
      <form action="">
        <input
          type="text"
          onChange={(e) => onSearch(e)}
          className="search-input"
        />
      </form>
      <div>Filter, Dropdowns</div>
    </div>
  );
};

export default Search;
