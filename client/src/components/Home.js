import React, { Component } from 'react';
import Products from '../components/Products';

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>All Products</h3>
                    <Products products={this.props.products} />
                </div>
            </div>
        )
    };
}

export default Home;