import React, { Component } from 'react';

class Product extends Component {

  render() {
    const product = this.props.product
    const image_path = "../../../images/" + this.props.product.image_xref
    return (
      <div key={product.a_prod_no} className="product">
        {/* <img src="https://m.media-amazon.com/images/I/61nFaHKU-HL._SY125_.jpg" alt="sample"></img> */}
        <img src={image_path} alt={image_path}></img>
        <p>{product.desc_1}</p>
      </div>
    )
  };
}

export default Product;