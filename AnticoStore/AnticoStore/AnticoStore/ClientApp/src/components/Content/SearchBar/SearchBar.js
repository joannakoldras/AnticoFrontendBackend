import React from "react";
import './SearchBar.css'

function SearchBar (){
    return (
      <div className="search">
            <input type="text" class="search-box" placeholder="search product"/>
            <button className="search-btn">Szukaj</button>
        </div>
    )
};

export default SearchBar;