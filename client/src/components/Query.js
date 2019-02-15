import React, { Component } from 'react';
import Products from '../components/Products';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
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
        this.setState({ isLoading: false })
        return body;
    };

    render() {
        return (
            <div>

                {this.state.isLoading ? null :
                    <div>
                        <h3>All Products</h3>
                        <Products products={this.state.products} />
                    </div>
                }

            </div>
        )
    };
}

export default Home;