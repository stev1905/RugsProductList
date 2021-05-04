import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.productData.map(productItems => (
                productItems.map(productItem => (
                    <Card id={props.productKey} productItem={productItem} cartItems={props.cartItems} addProductItem={props.addProductItem} />
            ))))}
        </div>
    )
} 

export default CardList;