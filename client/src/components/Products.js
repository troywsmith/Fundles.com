import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    render() {
        return (
            <div>
                <h3>Products</h3>
                <ul>
                    <p> TEST </p>
                    {/* {this.props.products ?
                        this.props.products.map(product => {
                            return (
                                <Product product={product} key={product.a_prod_no} />
                            )
                        }) : null
                    } */}
                </ul>
            </div>
        );
    };
}

export default Products;