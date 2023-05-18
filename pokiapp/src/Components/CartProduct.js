import Button from 'react-bootstrap/Button';
import { CartContext, getProductData } from "../CartContext";
import { useContext } from "react";
import Cards from './PokemonCard';

function CartProduct(card) {
    const {getProductData, deleteFromCart} = useContext(CartContext);
    const id = card.id;
    const quantity = card.quantity;
    const Cards = getProductData(id);

    

    return(
        <>
            <img id='CardImage' src={Cards.Image}/>
            <h3>{Cards.Name}</h3>
            <p>Total: {Cards.Price}</p>
            <p>${ (quantity * Cards.Price).toFixed(2)}</p>
            <Button size="sm" onClick={() => deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct