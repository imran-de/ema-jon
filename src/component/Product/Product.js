import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Feature from '../Feature/Feature';
import Star from '../Star/Star';
const Product = (props) => {
    // console.log(props.product.features)
    const { name, category, img, seller, price, stock, star, starCount } = props.product;
    const { features } = props.product;
    // console.log(features);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h4 className='product-name'>{name}</h4>
                <div className='flex'>
                    <div>
                        <p><small>by: {seller}</small></p>
                        <p>Price: ${price}</p>
                        <p><small>Only {stock} left in stock - order soon</small></p>
                        <p><small>Category: {category}</small></p>
                        <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>{cartIcon} add to cart</button>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <Star star={star} count={starCount}></Star>
                        <h5>Features: </h5>
                        <ul>
                            {
                                features.map(feature => <Feature feature={feature}></Feature>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;