// Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components
import ProductList from './ProductList'
import BuyButton from './BuyButton'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71L5k1lxnTL._SL1500_.jpg" />
        </div>
        <div className="welcome-message">
          <p>💥  No membership fees ever | Free shipping on orders over $50  💥</p>
        </div>

        <div className="FeaturedList">
          <h2 className="FeaturedList-title">Featured Categories</h2>
          <div className="FeaturedList-container">
            <div className="FeaturedList-product" >
              <Link to={`/category/test`}>
                <h3>Snacks</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71L5k1lxnTL._SL1500_.jpg" />
              </Link>
              {/* <BuyButton /> */}
            </div>
          </div>
        </div>

        <div className="FeaturedList">
          <h2 className="FeaturedList-title">New Products</h2>
          <div className="FeaturedList-container">
            <div className="FeaturedList-product" >
              <Link to={`/category/test`}>
                <h3>Snacks</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71L5k1lxnTL._SL1500_.jpg" />
              </Link>
              {/* <BuyButton /> */}
            </div>
          </div>
        </div>

        <div className="FeaturedList">
          <h2 className="FeaturedList-title">Sponsored Brands</h2>
          <div className="FeaturedList-container">
            <div className="FeaturedList-product" >
              <Link to={`/category/test`}>
                <h3>Snacks</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71L5k1lxnTL._SL1500_.jpg" />
              </Link>
              {/* <BuyButton /> */}
            </div>
          </div>
        </div>

        <ProductList />

      </div>
    );
  }
}

export default Home;