// React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components
import SearchBar from '../components/Searchbar'

class Header extends React.Component {

    render() {
        return (
            <header className="App-header">

                <div className="left">
                    <Link to="/" className="branding">
                        <img src="http://freevector.co/wp-content/uploads/2009/02/29303-box-of-food-package.png" />
                        <h1>Fundles.com</h1>
                    </Link>
                </div>

                <div className="middle">
                    <SearchBar />
                    {/* <input
                        className="search-products"
                        type="text"
                        placeholder="Search for products..." /> */}
                </div>

                <div className="right">
                    <Link to="/account">
                        <p className="fa fa-shopping-cart">Account</p>
                    </Link>
                    <Link to="/cart">
                        <button className="snipcart-checkout snipcart-summary">
                            <i className="fa fa-shopping-cart">$ {this.props.cartTotal.toFixed(2)} <span className="snipcart-total-items" >🛒</span></i>
                        </button>
                    </Link>
                </div>

            </header>
        );
    }
}

export default Header