import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct'
import fetchPokemon from "./Pokecards"
import React from "react"
let img = document.querySelector('#characterImg');
// let ability = {url}

const Cards =({characters}) => {
    const { addOneToCart, removeOneFromCart, deleteFromCart, productQuantity } = useContext(CartContext)

    img = characters.sprites;
       const theBlock = characters.map(card=>{
        return (
            
            <div className="PokemonCards" width='50 px' height='50px'>
                <img src={card.image} className="card-img-top" alt="..." height='250 px' width='250 px'/>
                <div className="card-body">
                    <h5 className="card-title">Character</h5>
                    <p className="card-text">Name: {card.name}</p>
                    <p className="card-text">Status: {card.url}</p>
                    
                    
                    <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                            <Button sm="6" onClick={() => addOneToCart(card.name)} className="mx-2" >+</Button>
                             
                                <Button sm="6" onClick={() => removeOneFromCart(card.name)} className="mx-2">-</Button>
                            </Col>
                        </Form>
       
                </div>
            </div>
        )
        })
        return <div>{theBlock} </div>
        

    
}

export default Cards


// export default function Cards(card){
//     const { addOneToCart, removeOneFromCart, deleteFromCart, productQuantity } = useContext(CartContext)
//     const { pokemon } = card
//     return(
//         <fetchPokemon id='pokemon'>
//             <div key={pokemon.id}></div>
//             <fetchPokemon.Body>
//                 <fetchPokemon.Img src={pokemon.Image} />
//                 <fetchPokemon.Title>{pokemon.Name}</fetchPokemon.Title>
//                 <fetchPokemon.Text>{pokemon.Type}</fetchPokemon.Text>
//                 <fetchPokemon.Text>${pokemon.Price}</fetchPokemon.Text>
//                 { productQuantity > 0 ?
//                     <>
//                         <Form as={Row}>
//                             <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
//                             <Col sm="6">
//                                 <Button sm="6" onClick={() => addOneToCart(pokemon.id)} className="mx-2">+</Button>
//                                 <Button sm="6" onClick={() => removeOneFromCart(pokemon.id)} className="mx-2">-</Button>
//                             </Col>
//                         </Form>
//                         <Button variant="danger" onClick={() => deleteFromCart(pokemon.id)} className="my-2">Remove from cart</Button>
//                     </>
//                     :
//                     <Button variant="primary" onClick={()=> addOneToCart(pokemon.id)}>Add To Cart</Button>}
//             </fetchPokemon.Body>
//         </fetchPokemon>
//         )
// }