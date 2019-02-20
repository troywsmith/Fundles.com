// Imports
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

// Components
import Category from './Category'
import ProductList from './ProductList'

class PageProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            categories: []
        }
    }

    async componentDidMount() {
        let response = await fetch(`/categories`);
        if (!response.ok) {
            return
        }
        let data = await response.json()
        let results = data.categories

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

        this.setState({ loading: false, categories: categories })
    }

    render() {
        return (
            <div className="products-page">

                <div className="sidebar">
                    <h3>CATEGORIES</h3>
                    {Object.keys(this.state.categories).map((category, index) => {
                        return (
                            <div key={index} className="sidebar-category">
                                <h5>{category}</h5>
                                {this.state.categories[category].map((subcategory, index) => {
                                    return (
                                        <Link to={`/products/category/${subcategory.toLowerCase()}`} key={index}>
                                            <p>{subcategory}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>

                <div className="content">

                    <div className="welcome">
                        <p>Products</p>
                    </div>

                    <Switch>
                        <Route path="/products/category/:id" component={Category} />
                    </Switch>

                </div>

            </div>
        );
    }
}

export default PageProducts;