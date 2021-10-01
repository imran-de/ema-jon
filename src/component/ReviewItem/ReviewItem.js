import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity } = props.product
    const { product, handleRemove } = props
    return (
        <div className=''>
            <h4 className='product-name'>{name}</h4>
            <p>price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(product.key)} className='btn-cart'>Remove</button>
        </div>
    );
};

export default ReviewItem;