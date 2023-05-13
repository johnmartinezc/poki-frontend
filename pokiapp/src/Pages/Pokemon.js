import Pokecard from '../Components/Pokecards';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

// import { Row, Col } from 'react-bootstrap';
const urlEndpoint = 'http://localhost:5001/all';

const Pokemon = () => {


    return (
		<div>
			
            <h1 id='pokemonWelcome'>Welcome to the pokemon center</h1>
		</div>
    )
}

export default Pokemon;

//test