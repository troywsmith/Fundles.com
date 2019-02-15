import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
      test: 'test state'
    }
  };

  componentDidMount() {
    this.callApi().catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ products: body.products });
    this.getCategories()
    this.setState({ isLoading: false })
    return body;
  };

  getCategories() {
    let products = this.state.products
    let categories = new Set()
    for (let i = 0; i < products.length; i++) {
      categories.add(products[i].prod_class_desc)
    }
    this.setState({ categories: [...categories] })
  }

  render() {

    return (
      <div className="app">
        <Header products={this.state.products} />
        {this.state.isLoading ? null :
          <Main products={this.state.products} />
        }
      </div>
    );

  }
}


export default App;