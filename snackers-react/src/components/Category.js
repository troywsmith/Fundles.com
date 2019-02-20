import React, { Component } from 'react';
import ProductList from './ProductList';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            category: ''
        }
    }

    async componentDidMount() {

        // Set state.category to whatever category is in the url
        // let param_id = this.props.match.params.id
        // let category = this.props.location.pathname.split('/')[3]
        let category = 'Juice'
        // console.log(category)
        // console.log(param_id)
        // console.log(this.props.location)
        // console.log(this.props.match)

        // Fetch all products
        // let response = await fetch(`/all_products`);
        // if (!response.ok) {
        //     return
        // }

        // let data = await response.json()
        // let products = data.products
        this.setState({ loading: false, category: category })
    }


    render() {
        if (!this.state.loading) {
            return (
                <ProductList product_list={this.state.category} />
            );
        }
        return (<h2 className="ProductList-title">Loading...</h2>);
    }

}

export default Category;