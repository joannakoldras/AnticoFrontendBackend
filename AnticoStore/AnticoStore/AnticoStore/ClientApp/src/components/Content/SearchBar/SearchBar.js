import React from "react";
import './SearchBar.css'

function SearchBar (){
    return (
      <div class="search">
            <input type="text" class="search-box" placeholder="search product"/>
            <button class="search-btn">Szukaj</button>
        </div>
    )
};

export default SearchBar;