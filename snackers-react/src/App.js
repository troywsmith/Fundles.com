// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Styles
import './styles/app.scss';

// Components
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Home from './components/Home';
import Footer from './components/Footer';
import Account from './components/Account';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
      cartTotal: 34.325234,
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

        <Header cartTotal={this.state.cartTotal} />
        <CategoryNav />

        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" exact component={Account} />
            <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={Product} />
            <Route path="/category/:id" component={Category} />
          </Switch>
        </main>

        <Footer />

      </div >
    );
  }
}

export default App;