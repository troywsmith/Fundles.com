import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    render() {
        return (
            <div>
                <h3>Products</h3>
                <div className="products">
                    {this.props.products ?
                        this.props.products.slice(0, 50).map(product => {
                            return (
                                <Product product={product} key={product.a_prod_no} />
                            )
                        }) : null
                    }
                </div>
            </div>
        );
    };
}

export default Products;