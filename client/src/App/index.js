import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
    this.onQueryChange = this.onQueryChange.bind(this);
  };

  componentDidMount() {
    this.callApi().catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    // Sort products to display by vendor
    let temp = body.products
    function compare(a, b) {
      if (a.vend_name < b.vend_name)
        return -1;
      if (a.vend_name > b.vend_name)
        return 1;
      return 0;
    }
    temp.sort(compare);

    // Filter out out of stock products
    let products = []
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].oh_qty > 0.0) {
        products.push(temp[i])
      }
    }

    this.setState({ products: products });
    this.getCategories()
    this.setState({ isLoading: false })
    return body;
  };

  getCategories() {
    // let products = this.state.products
    // let categories = new Set()
    // for (let i = 0; i < products.length; i++) {
    //   categories.add(products[i].prod_class_desc)
    // }
    // this.setState({ categories: [...categories] })
    this.setState({ categories: ['Snacks', 'Drinks', 'Healthy', 'Grocery', 'Home_Goods'] })
  }

  onQueryChange(evt) {
    const query = evt.target.value;
    console.log(query)
    let products = this.state.products;
    let results = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].desc_1.toLowerCase().includes(query.toLowerCase())) {
        results.push(products[i]);
      }
    }
    this.setState({ products: results });
  }

  render() {

    return (
      <div className="app">
        <Header products={this.state.products} onQueryChange={this.onQueryChange.bind(this)} />
        {this.state.isLoading ? null :
          <Main products={this.state.products} categories={this.state.categories} />
        }
      </div>
    );

  }
}


export default App;