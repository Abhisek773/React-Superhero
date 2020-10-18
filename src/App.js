import React, {useState} from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

function App() {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeros() {
    const response = await fetch(
      `https://superheroapi.com/api.php/1776663959159191/search/${searchText}`
    );
    const data = await response.json();
    console.log(data);
    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);

    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }

    if (searchTerm.length > 2) {
      searchSuperHeros();
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResult superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;
