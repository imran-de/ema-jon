import React from 'react';
import useCart from '../../hooks/useCart';
import useProduts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduts()
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default OrderReview;