// React Imports
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Styles
import './styles/app.scss';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Product from './components/Product';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={Product} /> */}
          </Switch>
        </main>

        <Footer />

      </div >
    );
  }
}

export default App;