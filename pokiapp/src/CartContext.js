import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext({
    items: [],
    toys: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

const urlEndpoint = 'http://localhost:5001';    

export function CartProvider({children}){
    const [toys, setToys] = useState([]);

    function getProductData(id){
        let productData = toys.find(product => product.id === id)
    
        if(productData === undefined){
            console.log("Product data does not exist for ID" + id)
            return undefined;
        }
    
        return productData
    }

    useEffect (()=>{
        axios.get(`${urlEndpoint}/dinosaurs/all`).then((response)=>{
            setToys(response.data.Toys);
        })
    },[])
    const [cartProducts, setCartProducts] = useState([]);

    // Cart data = [ { id: 1 , quantity:2 } ]

    function getProductQuantity(id){
        const quantity = cartProducts.find(toy => toy.id === id)?.quantity
      
        if(quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0){  //Product not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
    } else{   //Product is in cart
        setCartProducts(
            cartProducts.map(
                toy =>
                toy.id === id                              //If statement
                ? { ...toy, quantity: toy.quantity + 1 } //If statement is true
                : toy                                    // If statement is false
            )
        )
    }
}

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    toy =>
                    toy.id === id                              
                    ? {...toy, quantity: toy.quantity - 1}
                    : toy                                      
                )
            )
        }
    }

    function deleteFromCart(id){
        //[] if an object meets a condtion, add to array
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.Price * cartItem.quantity);
        });
        return totalCost
    }


    const contextValue = {
        toys,
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getProductData
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

//Context (cart, addToCart, removeCart)
//Provider -> gives your React app access to all the things in your context
