import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    //odd way
    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */
    //smart way
    const total = cart.reduce((previous, product) => previous + product.price, 0)
    const shipping = cart.reduce((previous, product) => previous + product.shipping, 0)
    /*  let total = 0;
     for (const product of cart) {
         total = total + product.price;
     } */

    const tax = (total + shipping) * .10;
    const grandTotal = tax + shipping + total;

    return (
        <div className='cart-summary'>
            <h3>Order Summary</h3>
            <p>Order Item: {props.cart.length}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping & Handling: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3 style={{ color: 'red', }}>Order Total: ${grandTotal.toFixed(2)}</h3>
            <button className='btn-cart'>Review Your Order</button>
        </div>
    );
};
export default Cart;