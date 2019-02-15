import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        }
    };

    componentDidMount() {
        this.callApi().catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({ products: body.products });
        // this.getCategories()
        this.setState({ isLoading: false })
        return body;
    };

    filterList = function (event) {
        let updatedList = this.state.products;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    render() {
        return (
            <div className="nav-top">
                <div className="nav-top-left">
                    <Link to='/'>snackers </Link>
                </div>
                <div className="nav-top-mid">
                    <form>
                        <input
                            placeholder="Search for products..."
                            className="product-search"
                            // ref={input => this.search = input}
                            onChange={this.filterList}
                        />
                        <button className="search-button"><span>🔍</span></button>
                        <p></p>
                    </form>
                </div>
                <div className="nav-top-right">
                    <Link to='/account'>My Account </Link>
                </div>
            </div>
        )
    };
}

export default Header;

