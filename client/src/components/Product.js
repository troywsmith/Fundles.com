import React, { Component } from 'react';

class Product extends Component {

  render() {
    const product = this.props.product
    return (
      <li key={product.a_prod_no}>
        {product.a_prod_no}: {product.desc_1}
      </li>
    )
  };
}

export default Product;