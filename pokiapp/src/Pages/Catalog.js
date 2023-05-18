import { Row, Col } from 'react-bootstrap';
import Cards from '../Components/PokemonCard';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';


const urlEndpoint = 'http://localhost:5001';

const Catalog = () =>{
    const {Cards} = useContext(CartContext);
    return (
		<div>
			<h1 align="center" className="catalog p-3">Shop</h1>
            <br/>
            <Row xs={1} md={3} className="g-4">
                {Cards.map((Card, idx)=>(
                <Col align="center" key={idx}>
                    <Cards Card={Card}/>
                </Col>
                ))}
            </Row>
		</div>
    )
}

export default Catalog