// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Styles
import './styles/app.scss';

// Fixed Components
import Header from './components/Header';
import NavTop from './components/NavTop';
import Footer from './components/Footer';

// Page Components
import PageHome from './components/PageHome';
import PageProducts from './components/PageProducts';
import PageAccount from './components/PageAccount';

// Other Components
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
          </Switch>
        </main>

        <Footer />

      </div >
    );
  }
}

export default App;