import React, { useState } from "react";
import './SearchBar.css';

function SearchBar ({ onSearch }) {
    const [searchString, setSearchString] = useState("");

    const handleSearch = () => {
        onSearch(searchString);
    };

    return (
      <div className="search">
            <input
                type="text"
                className="search-box"
                placeholder="Search product"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
                Szukaj
            </button>
        </div>
    );
}

export default SearchBar;