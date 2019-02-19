// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'

// Styles
import './styles/app.scss';

// Components
import Home from './components/Home';
import ProductList from './components/ProductList';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

const Header = () => {
  return (
    <header className="App-header">

      <div className="left">
        <Link to="/"><h1>🦐 Snackers</h1></Link>
      </div>

      <div className="middle">
        <input
          className="search-products"
          type="text"
          placeholder="Search for products..." />
      </div>

      <div className="right">
        <Link to="/account">
          <p className="fa fa-shopping-cart">Account</p>
        </Link>
        <Link to="/checkout">
          <button className="snipcart-checkout snipcart-summary">
            <i className="fa fa-shopping-cart">Checkout</i> <span className="snipcart-total-items"></span>
          </button>
        </Link>

      </div>

    </header>
  );
}

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="left">
        Made by <a href="https://snipcart.com/blog" target="_blank" rel="noopener noreferrer">Troy Smith</a>
      </div>
      <div className="right">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
      </div>
    </footer>
  );
}

export default App;