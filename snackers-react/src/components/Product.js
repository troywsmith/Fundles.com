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

          <div className="product-top">

            <div className="product_img">
              <img src={this.state.image_path} alt={this.state.product.name} />
            </div>

          </div>

          <div className="product-bottom">
            <p className="product-brand">{this.state.product.brand}</p>
            <p className="product-name">{this.state.product.name}</p>
            <p className="product-size-count">{this.state.product.size} | {this.state.product.count} </p>
            <input
              type="number"
              className="quantity-input"
            >
            </input>
            <BuyButton {...this.state} />
            <h3> About the Product </h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
          </div>

        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;