import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    //odd way
    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */
    //smart way
    const total = cart.reduce((previous, product) => previous + product.price, 0)
    /*  let total = 0;
     for (const product of cart) {
         total = total + product.price;
     } */
    let shipping = 0;
    let tax = 0;
    let grandTotal = tax + shipping + total;
    if (props.cart.length !== 0) {
        shipping = 15;
        tax = (total + shipping) * .10;
        grandTotal = tax + shipping + total;
    }

    return (
        <div className='cart-summary'>
            <h3>Order Summary</h3>
            <p>Order Item: {props.cart.length}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3 style={{ color: 'red', }}>Order Total: ${grandTotal.toFixed(2)}</h3>
            <button className='btn-cart'>Review Your Order</button>
        </div>
    );
};
export default Cart;