import React from 'react';
import './CheckoutItem.css';

const CheckoutItem = ( {cartItem, clearItemFromCart} ) => {
    const { productName, productImage, productPrice, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={productImage} alt='item' />
        </div>
        <span className='name'>{productName}</span>
        <span className='quantity'>
        <div>
            <span className='value'>{quantity}</span>
        </div>
        </span>
        <span className='price'>${productPrice.toFixed(2)}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
)}

export default CheckoutItem;