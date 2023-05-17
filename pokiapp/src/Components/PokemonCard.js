import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import apps from "./Pokecards"

import React from "react"
let img = document.querySelector('#characterImg');


const Cards =({characters}) => {
    img = characters.sprites;
       const theBlock = characters.map(card=>{
        return (
            <div className="PokemonCards" width='50 px' height='50px'>
                <img src={card.image} className="card-img-top" alt="..." height='250 px' width='250 px'/>
                <div className="card-body">
                    <h5 className="card-title">Character</h5>
                    <p className="card-text">Name: {card.name}</p>
                    <p className="card-text">Status: {card.status}</p>
                    <p className="card-text">Species: {card.species}</p>
                    <p className="card-text">Gender: {card.gender}</p>
                
                </div>
            </div>
        )
        
        })

  
        
        
        return <div>{theBlock}</div>
        


    
}

export default Cards