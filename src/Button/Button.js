import React from 'react';
import './Button.css'

const Button = (props)=> (
    <div className="btn" onClick={() => props.addProductItem(props.cartItems, props.item)}>
        <i className="fa fa-shopping-cart"></i>
        <span>Add to Cart</span>
    </div>
)

export default Button;