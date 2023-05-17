import Button from 'react-bootstrap/Button';
import { CartContext, getProductData } from "../CartContext";
import { useContext } from "react";

function CartProduct(props) {
    const {getProductData, deleteFromCart} = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const Toy = getProductData(id);

    

    return(
        <>
            <img id='toyImage' src={Toy.Image}/>
            <h3>{Toy.Name}</h3>
            <p>Total: {Toy.Price}</p>
            <p>${ (quantity * Toy.Price).toFixed(2)}</p>
            <Button size="sm" onClick={() => deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct