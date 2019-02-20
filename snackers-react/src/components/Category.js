import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            category: null,
            subcategories: [],
        }
    }

    async componentDidMount() {
        let response = await fetch(`/categories`);
        let data = await response.json()
        let results = data.categories

        // Get all categories and subcategories
        let categories = {}
        for (let i = 0; i < results.length; i++) {
            let category = results[i].category
            categories[category] = []
        }
        for (let i = 0; i < results.length; i++) {
            let category = results[i].category
            let subcategory = results[i].subcategory
            categories[category].push(subcategory)
        }

        // Set state.category to whatever category is in the url
        let param_id = this.props.match.params.id
        let category = param_id.slice(0, 1).toUpperCase() + param_id.slice(1)
        let subcategories = categories[category]

        this.setState({ loading: false, category: category, subcategories: subcategories })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="ProductList">
                    <h2 className="ProductList-title">{this.state.category}</h2>
                    <div className="ProductList-container">
                        {this.state.subcategories.map((subcategory, index) => {
                            return (
                                <div className="ProductList-product" key={index}>
                                    <Link to={`/category/${this.state.category.toLowerCase()}/${subcategory.replace( /\s/g, '').toLowerCase()}`}>
                                        <h3>{subcategory}</h3>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        return (<h2 className="ProductList-title">Loading...</h2>);
    }
}

export default ProductList;