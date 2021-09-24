import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displaySearched, setDisplaySearched] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplaySearched(data);
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            //call the local storage data
            const savedCart = getStoredCart();
            //make new array which are present in local storage
            const storedcart = [];
            for (const key in savedCart) {
                // console.log(savedCart[key]);
                //find out out the local storage data in main db
                const find = products.find(product => product.key === key);
                if (find) {
                    const quantity = savedCart[key];
                    find.quantity = quantity;
                    storedcart.push(find);
                }
            }
            //for showing cart ui localstore cart item
            setCart(storedcart);
        }
    }, [products])
    const handleAddToCart = ((product) => {
        console.log(...cart);
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage
        addToDb(product.key);
    })

    const handleSeacrh = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplaySearched(matchedProducts);
        console.log(displaySearched.length);


    }
    return (
        <section>
            <div className="seacrh-container">
                <input onChange={handleSeacrh} type="text" placeholder='item name' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {/* <h2>Products: {products.length}</h2> */}
                    {
                        displaySearched.map(product => <Product
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
        </section>
    );
};

export default Shop;