import React from "react";
import "./pokemon.css";
function Pokemon() {
  return (
    <div className="pokemon-nav">
      <div className="nav-items">
        <div className="nav-item active">Home</div>
        <div className="nav-item">Explore</div>
        <div className="nav-item">Pacakge</div>
        <div className="nav-item">Destination</div>
      </div>
      <div className="nav-search">
        <input
          type="text"
          className="search"
          id="search-box"
          placeholder="Find out..."
        />
        <button id="search">Search</button>
      </div>
    </div>
  );
}

export default Pokemon;
