// Imports
import _ from 'lodash'
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'
import { Switch, Route, Link } from 'react-router-dom';

// Components
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
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0.00,
      term: "",
      category: "",
      quantity: 1,
      fetchedData: false
    };
  };

  // Fetches data from API
  getProducts = async () => {
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

    this.setState({
      products: products,
      results: products
    });
    this.getCategories()
    this.setState({ fetchedData: true })
    return body;
  };

  componentWillMount() {
    this.getProducts();
    //   this.resetComponent();
  }

  // // Search by Keyword
  // handleSearch(event) {
  //   this.setState({ term: event.target.value });
  // }
  // // Mobile Search Reset
  // handleMobileSearch() {
  //   this.setState({ term: "" });
  // }
  // // Filter by Category
  // handleCategory(event) {
  //   this.setState({ category: event.target.value });
  //   console.log(this.state.category);
  // }
  // // Add to Cart
  // handleAddToCart(selectedProducts) {
  //   let cartItem = this.state.cart;
  //   let productID = selectedProducts.id;
  //   let productQty = selectedProducts.quantity;
  //   if (this.checkProduct(productID)) {
  //     console.log("hi");
  //     let index = cartItem.findIndex(x => x.id == productID);
  //     cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty);
  //     this.setState({
  //       cart: cartItem
  //     });
  //   } else {
  //     cartItem.push(selectedProducts);
  //   }
  //   this.setState({
  //     cart: cartItem,
  //     cartBounce: true
  //   });
  //   setTimeout(
  //     function () {
  //       this.setState({
  //         cartBounce: false,
  //         quantity: 1
  //       });
  //       console.log(this.state.quantity);
  //       console.log(this.state.cart);
  //     }.bind(this),
  //     1000
  //   );
  //   this.sumTotalItems(this.state.cart);
  //   this.sumTotalAmount(this.state.cart);
  // }
  // handleRemoveProduct(id, e) {
  //   let cart = this.state.cart;
  //   let index = cart.findIndex(x => x.id == id);
  //   cart.splice(index, 1);
  //   this.setState({
  //     cart: cart
  //   });
  //   this.sumTotalItems(this.state.cart);
  //   this.sumTotalAmount(this.state.cart);
  //   e.preventDefault();
  // }
  // checkProduct(productID) {
  //   let cart = this.state.cart;
  //   return cart.some(function (item) {
  //     return item.id === productID;
  //   });
  // }
  // sumTotalItems() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   total = cart.length;
  //   this.setState({
  //     totalItems: total
  //   });
  // }
  // sumTotalAmount() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   for (var i = 0; i < cart.length; i++) {
  //     total += cart[i].price * parseInt(cart[i].quantity);
  //   }
  //   this.setState({
  //     totalAmount: total
  //   });
  // }

  // //Reset Quantity
  // updateQuantity(qty) {
  //   console.log("quantity added...");
  //   this.setState({
  //     quantity: qty
  //   });
  // }
  // // Open Modal
  // openModal(product) {
  //   this.setState({
  //     quickViewProduct: product,
  //     modalActive: true
  //   });
  // }
  // // Close Modal
  // closeModal() {
  //   this.setState({
  //     modalActive: false
  //   });
  // }


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

  // handleResultSelect = (e, { product }) => this.setState({ product: product })

  // // Handle form change
  // handleSearchChange = (e, { value }) => {

  //   this.setState({
  //     isLoading: true,
  //     value
  //   })

  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.resetComponent()

  //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
  //     const isMatch = product => re.test(product.desc_1)

  //     this.setState({
  //       isLoading: false,
  //       results: _.filter(this.state.products, isMatch),
  //     })
  //   }, 500)

  // }


  render() {
    const isLoading = this.state.isLoading;
    const value = this.state.value;
    const results = this.state.results;

    return (
      <div className="app">

        <div className="nav-top">

          <div className="nav-top-left">
            <Link to='/'>snackers </Link>
          </div>

          <div className="nav-top-mid">

          </div>

          <div className="nav-top-right">
            <Link to='/account'>My Account </Link>
          </div>

        </div>

        <div className="nav-top-2">

          <div className="nav-top-2-left">
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={results}
              value={value}
              placeholder='Search'
            // {...this.props}
            />
          </div>

          <div className="nav-top-2-mid">

          </div>

          <div className="nav-top-2-right">
            <Link to='/cart'>🛒${this.state.cartTotal}</Link>
          </div>

        </div>

        <div className="main">

          <div className='sidebar'>
            <Sidebar />
          </div>

          {this.state.fetchedData ?

            <div className='right'>

              {/* <Categories categories={this.state.categories} /> */}

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


// ReactDOM.render(<App />, document.getElementById("root"));