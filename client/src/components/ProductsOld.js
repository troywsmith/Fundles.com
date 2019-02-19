import React, { Component } from 'react';
import Product from './ProductSmall';

class Products extends Component {

    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products ?
                        this.props.products.slice(0, 100).map(product => {
                            return (
                                <Product product={product} key={product.a_prod_no} />
                            )
                        }) : null
                    }
                </ul>
            </div>
        );
    };
}

export default Products;