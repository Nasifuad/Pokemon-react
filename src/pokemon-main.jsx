import React from "react";

function Main() {
  const api_url = "https://pokeapi.co/api/v2/pokemon/";

  async function GetPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  GetPokemon(api_url);
  return (
    <div className="hello">
      <h1>Pokemon</h1>
    </div>
  );
}

export default Main;
