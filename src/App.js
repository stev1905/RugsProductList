import React, { Component } from 'react';
import Header from './Header/Header';
import CardList from './CardList/CardList';
import {productData} from './productData';
import CheckoutSection from './CheckoutSection/CheckoutSection';
import SlidingPanel from 'react-sliding-side-panel';
import FilterPanel from './FilterPanel/FilterPanel';

import 'react-sliding-side-panel/lib/index.css';
import './App.css';

const newProductData = productData.map((product) => {
  return product.cart.map((cartItem) => {
    return {
      productKey: cartItem.product,
      productName: cartItem.productName,
      productPrice: cartItem.price,
      productSize: cartItem.SIZE,
      productColor: cartItem.COLOR,
      productImage: cartItem.imgUrl,
      productCategory: cartItem.type,
    }
  })
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      productData: newProductData,
      cartItems: [],
      isPanelOpen: false,
    }
  }

  addProductItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.productKey === cartItemToAdd.productKey
    );

    if(existingCartItem) {
      return cartItems.map(cartItem => 
        cartItem.productKey === cartItemToAdd.productKey
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
    }
    this.setState({cartItems: [...cartItems, {...cartItemToAdd, quantity: 1}]}) 
  }

  clearItemFromCart = (removedItem) => {
    console.log(removedItem)
    const removeCartItem = this.state.cartItems.filter(
      cartItem => cartItem.productKey !== removedItem.productKey
      )
      this.setState({cartItems: removeCartItem})
  }

  togglePanel = () => {
    this.setState({isPanelOpen: !this.state.isPanelOpen})
  }

  render() {
    const {productData, cartItems, isPanelOpen} = this.state;
    return cartItems.length < 1 ?
      (<div>
        <Header togglePanel={this.togglePanel}/>
        <CardList 
          productData={productData}
          cartItems={cartItems} 
          addProductItem={this.addProductItem}
        />
        <SlidingPanel
          type={'right'}
          isOpen={isPanelOpen}
          size={25}
        >
        <FilterPanel 
          togglePanel={this.togglePanel}
        />
        </SlidingPanel>
      </div>) : 
      (<div>
        <Header togglePanel={this.togglePanel}/>
        <CardList 
          productData={productData}
          cartItems={cartItems} 
          addProductItem={this.addProductItem}
        />
        <SlidingPanel
          type={'right'}
          isOpen={isPanelOpen}
          size={25}
        >
        <FilterPanel 
          togglePanel={this.togglePanel}
        />
        </SlidingPanel>
        <CheckoutSection cartItems={cartItems} clearItemFromCart={this.clearItemFromCart}/>
      </div>)
  }
}

export default App;
