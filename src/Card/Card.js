import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => (
    <div className='card-container'>
        <img alt='productItem' src={`https://${props.productItem.productImage}`.split('?')[0]}/>
        <p>{props.productItem.productName}</p>
        <div className="card-footer">
            <p>${props.productItem.productPrice.toFixed(2)}</p>
            <p>{props.productItem.productColor}</p>
        </div>
        <Button addProductItem={props.addProductItem} cartItems={props.cartItems} item={props.productItem} />
    </div>
)

export default Card;