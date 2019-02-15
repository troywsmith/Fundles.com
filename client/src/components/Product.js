import React, { Component } from 'react';

class Product extends Component {

  render() {
    const product = this.props.product;
    const image_path = "/images/" + this.props.product.image_xref.toLowerCase();
    return (
      <div key={product.a_prod_no} className="product">
        <div className="fallback-pic">
          <img src={image_path} className="product-picture"></img>
        </div>
        <p className="product-name">{product.desc_1.toLowerCase()}</p>
        <button>Add to cart</button>
      </div>
    )
  };
}

export default Product;