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
      id: cartItem.product,
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
  constructor(props) {
    super(props)
    this.state = {
      productData: newProductData,
      cartItems: [],
      isPanelOpen: false,
      checked: [],
      filters: {
        price: [],
        color: [],
        size: [],
        category: []
      }
    }
  }

  addProductItem = (cartItems, cartItemToAdd) => {
    const getNewData = (() => {
      const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
      );
      if(existingCartItem) {
        return cartItems.map(cartItem => 
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
          )
      }
      return [...cartItems, {...cartItemToAdd, quantity: 1 }]
    })()
    this.setState({cartItems: getNewData})
  }

  clearItemFromCart = (removedItem) => {
    const removeCartItem = this.state.cartItems.filter(
      cartItem => cartItem.id !== removedItem.id
      )
      this.setState({cartItems: removeCartItem})
  }

  handleFilters = (category, filters) => {
    let filteredProducts = [];
    if(category === 'color') {
      filteredProducts = this.state.productData.map(
        filterData => filterData.filter(
          filterItem => filterItem.productColor.includes(filters)
        )
      )
    } else if(category === 'size') {
      filteredProducts = this.state.productData.map(
        filterData => filterData.filter(
          filterItem => filterItem.productSize.includes(filters)
        )
      )
    } else if(category === 'price') {
      filteredProducts = this.state.productData.map(
        filterData => filterData.filter(
          filterItem => filterItem.productPrice < parseInt(filters)
        )
      )
    }  
    this.setState({productData: filteredProducts})
  }

  handleToggle = (value, category, filter) => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if(currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.handleFilters(category, filter);
    this.setState({checked: newChecked, isPanelOpen: !this.state.isPanelOpen});
  }

  togglePanel = () => {
    this.setState({isPanelOpen: !this.state.isPanelOpen})
  }

  render() {
    const {productData, cartItems, isPanelOpen, checked, filters} = this.state;
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
          handleToggle={this.handleToggle}
          checked={checked}
          handleFilters={this.handleFilters}
          filters={filters}
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
          handleToggle={this.handleToggle}
          checked={checked}
          handleFilters={this.handleFilters}
          filters={filters}
        />
        </SlidingPanel>
        <CheckoutSection cartItems={cartItems} clearItemFromCart={this.clearItemFromCart}/>
      </div>)
  }
}

export default App;
