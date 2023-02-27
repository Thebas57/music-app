import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${search}`);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit}>
        <FiSearch />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
