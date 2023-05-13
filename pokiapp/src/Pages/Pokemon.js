import Pokecard from '../Components/Pokecards';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

// import { Row, Col } from 'react-bootstrap';
const urlEndpoint = 'http://localhost:5001/all';

const Pokemon = () => {


    return (
		<div>
			
            <h1 className='pokemonWelcome'>Welcome to the pokemon center</h1>
            <img className="PokemonGIF" src="http://textfiles.com/underconstruction/HeHeartlandPark2601underconstructionbar9.gif" alt="empGif"></img>

             <button class="btn btn-primary" type="button" id="searchButton">search</button>
		</div>
    )
}

export default Pokemon;

//test