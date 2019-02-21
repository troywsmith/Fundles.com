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
        let category = this.props.match.params.category
        this.setState({ loading: false, category: category })
    }

    render() {
        if (!this.state.loading) {
            return (
                <ProductList product_list={this.props.match.params.category} />
            );
        }
        return (<h2 className="ProductList-title">Loading...</h2>);
    }

}

export default Category;