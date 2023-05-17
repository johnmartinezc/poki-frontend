import Pokecard from '../Components/Pokecards';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Search } from './Product';
// import { Row, Col } from 'react-bootstrap';
// const urlEndpoint = 'http://localhost:5001/all';


import React from "react";
import Cards from "../Components/PokemonCard";
import fetchPokemon from "../Components/Pokecards"



function Apps() {
  const [cardList, setCardList] = React.useState([])

  async function getAPI() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/`)

    // https://pokeapi.co/api/v2/pokemon/${userInput.value}`
      .then(response => response.json())
      .then(data => setCardList(data.results));
  }

  React.useEffect(() => {
    getAPI();

  }, []);
 

console.log(cardList)
  return (
    <div className="container-sm">
      <Cards characters ={cardList}/>
    </div>
  );
}

export default Apps;

// const Pokemon = () => {


//     return (
// 		<div>
			
//             <h1 className='pokemonWelcome'>Welcome to the pokemon center</h1>
            
//             <img className="PokemonGIF" src="http://textfiles.com/underconstruction/HeHeartlandPark2601underconstructionbar9.gif" alt="empGif"></img>
//              <button class="btn btn-primary" type="button" id="searchButton">search</button>
//             console.log("clicked")


// 		</div>
//     )
// }

// export default Pokemon;

//test