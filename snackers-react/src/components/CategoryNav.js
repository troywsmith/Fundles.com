// React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components


class Header extends Component {
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
        for (let i=0; i < results.length; i++) {
            let category = results[i].category
            categories[category] = []
        }

        for (let i=0; i < results.length; i++) {
            let category = results[i].category
            let subcategory = results[i].subcategory
            categories[category].push(subcategory)
        }

        this.setState({ loading: false, categories: categories })
    }
    render() {
        if (!this.state.loading) {
            return (
                <div className="App-header">
                    <div className="CategoryNav-container">
                        {Object.keys(this.state.categories).map((category, index) => {
                            return (
                                <div className="CategoryNav-category" key={index}>
                                    <Link to={`/category/${category.toLowerCase()}`}>
                                        <h3>{category}</h3>
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

export default Header