import React, { Component } from 'react';

const API = 'http://127.0.0.1:5000/products';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  };

  componentDidMount() {
    return fetch(API, { mode: 'no-cors' })
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ products: data.products }))
      .catch((error) => {
        console.log(error)
    });
  };

  render() {
    return (
        <ul>
          {this.state.products.map(product =>
            <li key={product.a_prod_no}>
              <p>{product.a_prod_no}</p> 
              <p>{product.desc_1}</p> 
            </li>
          )}
        </ul>
    )
  };
}

export default Products;