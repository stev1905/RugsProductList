import React from 'react';
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import './CheckoutSection.css';

const CheckoutSection = (props) => (
    <div className='checkout-page'>
       {console.log(props)}
        <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span> 
            </div>
            <div className='header-block'>
               <span>Description</span> 
            </div>
            <div className='header-block'>
               <span>Quantity</span> 
            </div>
            <div className='header-block'>
               <span>Price</span> 
            </div>
            <div className='header-block'>
               <span>Remove</span> 
            </div>
        </div>
        {props.cartItems.map(cartItem => (<CheckoutItem key={cartItem.productKey} cartItem={cartItem} clearItemFromCart={props.clearItemFromCart}/>
        ))}
    </div>
)

export default CheckoutSection;