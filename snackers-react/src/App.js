// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Styles
import './styles/app.scss';

// Fixed Components
import Header from './components/Header';
import NavTop from './components/NavTop';
import Footer from './components/Footer';

// Pages
import PageHome from './components/PageHome';
import PageProducts from './components/PageProducts';
import PageAccount from './components/PageAccount';

// Components > components
// import Category from './components/Category';
import Product from './components/Product';
// import ProductList from './components/ProductList';
import Category from './components/Category';

// Other


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
      cartTotal: 34.325234,
    }
  }

  // async componentDidMount() {
  //   let response = await fetch(`/all_products`);
  //   if (!response.ok) {
  //     return
  //   }

  //   let data = await response.json()
  //   let products = data.products
  //   this.setState({ loading: false, products: products })
  // }

  render() {
    return (
      <div className="App">

        <Header cartTotal={this.state.cartTotal} />

        <NavTop />

        <main className="App-content">
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/products" component={PageProducts} />
            <Route path="/account" component={PageAccount} />

            <Route path="/product/:id" component={Product} />
            {/* <Route path="/products/category/:id" component={Category} /> */}
          </Switch>
        </main>

        <Footer />

      </div >
    );
  }
}

export default App;