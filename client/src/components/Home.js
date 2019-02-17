import React, { Component } from 'react'
import Products from './Products'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h4>Products</h4>
                <Products products={this.props.products} />
            </div>
        )
    }
}