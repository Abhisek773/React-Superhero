import React, {useState} from "react";

function SearchBar(props) {
  const {handleChange, searchText} = props;
  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Find Superheros Here"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchBar;
