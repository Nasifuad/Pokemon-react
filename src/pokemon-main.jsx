import React from "react";
// import Mew from "./assests/Meow.png";
import pokebol from "./assests/Pokebol.svg";
// import Pokemon from "./pokemon";
function Main() {
  const api_url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemon_name = document.getElementById("search-box");
  const pokemonbtn = document.getElementById("search");
  async function GetPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async function showPokemon(name) {
    const url = api_url + name;
    const data = await GetPokemon(url);
    const img_url = data.sprites.front_default;
    document.getElementById("img").src = img_url;
  }
  pokemonbtn.addEventListener("click", () => {
    const name = pokemon_name.value;
    showPokemon(name);
  });
  return (
    <div className="hello">
      <h1>Pokemon</h1>
      <img
        src=""
        alt="mew"
        id="img"
        style={({ width: "1000px" }, { backgroundColor: "red" })}
      />
      {/* <img src={pokebol} alt="" /> */}
    </div>
  );
}

export default Main;
