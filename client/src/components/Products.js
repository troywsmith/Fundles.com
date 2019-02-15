import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    render() {
        return (
            <div>
                <div className="products">
                    {this.props.products ?
                        this.props.products.slice(0, 100).map(product => {
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