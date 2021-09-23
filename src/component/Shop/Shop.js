import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = ((product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    })
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h2>Products: {products.length}</h2> */}
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;