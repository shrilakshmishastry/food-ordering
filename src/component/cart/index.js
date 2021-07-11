import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () =>{
    const cart = useSelector(state=>state.cart);
    console.log(cart.productsInCarts.length);
    return(
        <div className="application-cart">
            Cart{cart.productsInCarts.length}
        </div>
    );
}
export default Cart;