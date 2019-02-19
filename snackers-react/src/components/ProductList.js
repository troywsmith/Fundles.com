import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BuyButton from './BuyButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    }
  }

  async componentDidMount() {
    let response = await fetch(`/${this.props.product_list.toLowerCase()}_products`);
    if (!response.ok) {
      return
    }

    let data = await response.json()
    let products = data.products
    this.setState({ loading: false, products: products })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">{this.props.product_list} Products ({this.state.products.length})</h2>
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {
                
              const image_path = "/images/" + product.image_xref.toLowerCase();

              return (
                <div className="ProductList-product" key={product.a_prod_no}>
                  <Link to={`/product/${product.a_prod_no}`}>
                    <h3>{product.desc_1}</h3>
                    <img src={image_path} alt={product.desc_1} />
                  </Link>
                  <BuyButton product={product} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default ProductList;