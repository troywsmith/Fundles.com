// Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components
import CategoryList from './Category'
import ProductList from './ProductList'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71L5k1lxnTL._SL1500_.jpg" />
        </div>
        <div className="welcome-message">
          <p>💥 Free shipping on orders over $50 | No membership fees | 1-3 day shipping 💥</p>
        </div>

        <CategoryList />

        <ProductList product_list={'Featured'}/>

        <ProductList product_list={'New'}/>

        <ProductList product_list={'All'}/>

      </div>
    );
  }
}

export default Home;