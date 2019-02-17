// Imports
import _ from 'lodash'
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Home from '../components/Home';
import Snacks from '../components/Snacks';
import Drinks from '../components/Drinks';
import Healthy from '../components/Healthy';
import Grocery from '../components/Grocery';
import HomeGoods from '../components/HomeGoods';

// Will always show
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchedData: false,
      products: [],
      // isLoading: false,
      // results: [],
      cart: [],
    };
  };

  // Happens on page launch/reload
  componentDidMount() {
    this.callApi().catch(err => console.log(err));
    this.resetComponent();
  }

  // Fetches data from API
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
    this.setState({ results: products });
    this.getCategories()
    this.setState({ fetchedData: true })
    return body;
  };

  // Gets all categories and add to state
  getCategories() {
    // let products = this.state.products
    // let categories = new Set()
    // for (let i = 0; i < products.length; i++) {
    //   categories.add(products[i].prod_class_desc)
    // }
    // this.setState({ categories: [...categories] })
    this.setState({ categories: ['Snacks', 'Drinks', 'Healthy', 'Grocery', 'Home_Goods'] })
  }

  // Resets results
  resetComponent = () => this.setState({ isLoading: false, results: this.state.products, value: '', })

  // 
  handleResultSelect = (e, { product }) => this.setState({ value: product.desc_1 })

  // Handle form change
  handleSearchChange = (e, { value }) => {

    this.setState({
      isLoading: true,
      value
    })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = product => re.test(product.desc_1)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.products, isMatch),
      })
    }, 500)

    console.log(this.state)
  }


  render() {
    const isLoading = this.state.isLoading;
    const value = this.state.value;
    const results = this.state.results;

    return (
      <div className="app">

        <Header products={this.state.products} />

        <div className="main">

          <div className='sidebar'>
            <Sidebar />
          </div>

          {this.state.fetchedData ?

            <div className='right'>

              <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
              />

              <Categories categories={this.state.categories} />

              <Switch>
                <Route
                  exact path='/'
                  component={() => <Home products={this.state.results} />}
                />
                <Route
                  path='/snacks'
                  component={() => <Snacks products={this.state.results} />}
                />
                <Route
                  path='/drinks'
                  component={() => <Drinks products={this.state.results} />}
                />
                <Route
                  path='/grocery'
                  component={() => <Grocery products={this.state.results} />}
                />
                <Route
                  path='/healthy'
                  component={() => <Healthy products={this.state.results} />}
                />
                <Route
                  path='/home_goods'
                  component={() => <HomeGoods products={this.state.results} />}
                />
              </Switch>

            </div>

            : null
          }

        </div>
      </div>
    );

  }
}


export default App;


