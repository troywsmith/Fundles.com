import React, { Component } from 'react';

class Product extends Component {

  render() {
    const product = this.props.product;
    const image_path = "/images/" + this.props.product.image_xref.toLowerCase();
    return (
      <li key={product.a_prod_no} className="product">

        <div className="a-row a-spacing-small">

        </div>

        <div>
          <img src={image_path} className="product-picture"></img>
        </div>

        <div>
          <p className="product-name">{product.desc_1.toLowerCase()}</p>
        </div>

        <div className="a-row a-grid-vertical-align a-grid-center">

        </div>

        <div>

        </div>

        <div>
          <button className="add-to-cart-button">Add to cart</button>
        </div>

        <div className="a-row a-spacing-mini">

        </div>

      </li>
    )
  };
}

export default Product;