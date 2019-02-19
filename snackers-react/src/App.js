// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Styles
import './styles/app.scss';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Account from './components/Account';
import ProductList from './components/ProductList';
import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    }
  }

  async componentDidMount() {
    let response = await fetch(`/all_products`);
    if (!response.ok) {
      return
    }

    let data = await response.json()
    let products = data.products
    this.setState({ loading: false, products: products })
  }

  render() {
    return (
      <div className="App">

        <Header />

        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" exact component={Account} />
            <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={Product} />

          </Switch>
        </main>

        <Footer />

      </div >
    );
  }
}

export default App;