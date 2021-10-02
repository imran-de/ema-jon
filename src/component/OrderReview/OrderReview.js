import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduts()
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        history.push('/place-order');
        //set the cart function in ui
        setCart([]);
        //than update the fakedb storage
        clearTheCart();

    }
    return (
        <section>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>)
                    }
                </div>
                <div className="cart-summary">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="btn-cart">Place Order</button>
                    </Cart>
                </div>
            </div>
        </section>
    );
};

export default OrderReview;