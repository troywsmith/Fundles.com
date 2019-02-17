import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div className="nav-top">
                <div className="nav-top-left">
                    <Link to='/'>snackers </Link>
                </div>
                <div className="nav-top-mid">
                    {/* <form>
                        <input
                            placeholder="Search for products..."
                            className="product-search"
                            onChange={this.props.onQueryChange}
                        />
                        <button className="search-button"><span>🔍</span></button>
                        <p></p>
                    </form> */}
                </div>
                <div className="nav-top-right">
                    <Link to='/account'>My Account </Link>
                </div>
            </div>
        )
    };
}

export default Header;