import { Row, Col } from 'react-bootstrap';
import DinoCard from '../Components/PokemonCard';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';


const urlEndpoint = 'http://localhost:5001';

const Catalog = () =>{
    const {toys} = useContext(CartContext);
    return (
		<div>
			<h1 align="center" className="catalog p-3">Shop</h1>
            <br/>
            <Row xs={1} md={3} className="g-4">
                {toys.map((toy, idx)=>(
                <Col align="center" key={idx}>
                    <DinoCard toy={toy}/>
                </Col>
                ))}
            </Row>
		</div>
    )
}

export default Catalog