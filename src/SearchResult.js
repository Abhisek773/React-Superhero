import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResult(props) {
  const {superheroData = []} = props;

  return (
    <div>
      {superheroData.map((superhero) => (
        <SearchResultItem data={superhero} />
      ))}
    </div>
  );
}

export default SearchResult;
