import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BuyButton from './BuyButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      category: null,
      products: []
    }
  }

  async componentDidMount() {
    // let response = await fetch(`/${category}_products`);
    // let response = await fetch(`/${this.props.product_list.toLowerCase()}_products`);
    const param_category = this.props.product_list.toString()
    let category = param_category.slice(0, 1).toUpperCase() + param_category.slice(1)
    console.log(category)

    let response = await fetch(`/all_products`);
    if (!response.ok) {
      return
    }

    let data = await response.json()
    let products = data.products

    let results = products
    if (category !== 'All') {

      results = []
      for (let i = 0; i < products.length; i++) {

        let product_categories = []

        // Add Subcategory
        product_categories.push(products[i].subcategory)

        // Featured Item
        if (products[i].featured === 'YES') {
          product_categories.push('Featured')
        }

        // New Item
        if (products[i].new === 'YES') {
          product_categories.push('New')
        }

        if (product_categories.includes(category)) {

          console.log(product_categories, category)
          results.push(products[i])
        }

      }

    }

    this.setState({ loading: false, category: category, products: results })
  }


  async componentDidUpdate() {
    // let response = await fetch(`/${category}_products`);
    // let response = await fetch(`/${this.props.product_list.toLowerCase()}_products`);
    const param_category = this.props.product_list.toString()
    let category = param_category.slice(0, 1).toUpperCase() + param_category.slice(1)
    console.log(category)

    let response = await fetch(`/all_products`);
    if (!response.ok) {
      return
    }

    let data = await response.json()
    let products = data.products

    let results = products
    if (category !== 'All') {

      results = []
      for (let i = 0; i < products.length; i++) {

        let product_categories = []

        // Add Subcategory
        product_categories.push(products[i].subcategory)

        // Featured Item
        if (products[i].featured === 'YES') {
          product_categories.push('Featured')
        }

        // New Item
        if (products[i].new === 'YES') {
          product_categories.push('New')
        }

        if (product_categories.includes(category)) {

          console.log(product_categories, category)
          results.push(products[i])
        }

      }

    }

    this.setState({ loading: false, category: category, products: results })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">{this.props.category} Products ({this.state.products.length})</h2>
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {

              const image_path = "/images/" + product.image_xref.toLowerCase();

              return (
                <div className="ProductList-product" key={product.a_prod_no}>
                  <Link to={`/product/${product.a_prod_no}`}>
                    {/* <h3>{product.name.toLowerCase()}</h3> */}
                    <img src={image_path} alt={product.name} />
                  </Link>
                  <div className="product-details">
                    <p className="bolder">{product.brand.toLowerCase()}</p>
                    <p className="bolder">{product.name.toLowerCase()}</p>
                    <p>{product.size.toLowerCase()} | {product.count}</p>
                    <p>${parseFloat(product.curr_cost + '00000').toFixed(2)}</p>
                    <BuyButton product={product} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Loading...</h2>);
  }
}

export default ProductList;