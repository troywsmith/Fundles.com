import React, { Component } from 'react';
// import Products from '../components/Products';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
      test: 'test state'
    }
  };

  componentDidMount() {
    this.callApi()
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({
      products: body.products,
      isLoading: false
    });
    return body;
  };



  render() {

    return (
      <div >

        <h2>Snackly</h2>

        {this.state.isLoading ? null :

          <div >

            <div>
              <h3>Available Products</h3>
              <hr />
              <ul>
                {this.state.products ?
                  this.state.products.map(product => {
                    return (
                      <li key={product.a_prod_no}>
                        {product.a_prod_no}: {product.desc_1}
                      </li>
                    )
                  }) : null
                }

              </ul>
              <hr />
            </div>

          </div>

        }

      </div>
    );

  }
}


export default Main;