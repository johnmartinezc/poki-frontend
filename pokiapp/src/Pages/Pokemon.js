// import DinoCard from '../Components/Pokecard';
import { useNavigate } from "react-router-dom";


// import { Row, Col } from 'react-bootstrap';

const urlEndpoint = 'http://localhost:5001/all';


const Pokemon = () => {
    const navigate = useNavigate();

    return (
		<div>
			<h1 align="center" className="catalog p-3">Shop</h1>
            <br/>
            
		</div>
    )
}

export default Pokemon;

//test