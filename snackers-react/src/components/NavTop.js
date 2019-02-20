// React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components


class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <div className="CategoryNav-container">
                    <div className="CategoryNav-category">
                        <Link to={`/products/category/all`}>
                            <h3>Categories</h3>
                        </Link>
                    </div>
                    <div className="CategoryNav-category">
                        <Link to={`/products/category/best-sellers`}>
                            <h3>Best Sellers</h3>
                        </Link>
                    </div>
                    <div className="CategoryNav-category">
                        <Link to={`/products/category/new`}>
                            <h3>All New</h3>
                        </Link>
                    </div>
                    <div className="CategoryNav-category">
                        <Link to={`/products/category/sale`}>
                            <h3>Sale</h3>
                        </Link>
                    </div>
                    <div className="CategoryNav-category">
                        <Link to={`/products/category/favorites`}>
                            <h3>Favorites</h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header