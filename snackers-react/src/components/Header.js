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
                    <Link to="/"><h1>🦐 Snackers</h1></Link>
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
                    <Link to="/checkout">
                        <button className="snipcart-checkout snipcart-summary">
                            <i className="fa fa-shopping-cart">Checkout</i> <span className="snipcart-total-items"></span>
                        </button>
                    </Link>

                </div>

            </header>
        );
    }
}

export default Header