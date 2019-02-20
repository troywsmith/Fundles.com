import React, { Component } from 'react';
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, product: {} }
  }

  async componentDidMount() {
    let response = await fetch(`/all_products`)
    let data = await response.json()

    let products = data.products
    let product = null
    let param_id = this.props.match.params.id

    for (let i = 0; i < products.length; i++) {
      if (products[i].a_prod_no.toString() === param_id.toString()) {
        product = products[i]
      }
    }

    this.setState({
      loading: false,
      product: product,
      image_path: "/images/" + product.image_xref.toLowerCase()
    })

  }

  render() {

    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.product.desc_1}</h2>
            <img src={this.state.image_path} alt={this.state.product.desc_1} />
            <BuyButton {...this.state} />
          </div>
          <div className="product__description">
            {this.state.product.desc_1}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;