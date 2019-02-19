import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductList extends Component {
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
        let categories = data.categories
        this.setState({ loading: false, categories: categories })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="ProductList">
                    <h2 className="ProductList-title"> Featured Categories ({this.state.categories.length})</h2>
                    <div className="ProductList-container">
                        {this.state.categories.map((category, index) => {
                            return (
                                <div className="ProductList-product" key={index}>
                                    <Link to={`/categories/${category.category}`}>
                                        <h3>{category.category}</h3>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        return (<h2 className="ProductList-title">Waiting for API...</h2>);
    }
}

export default ProductList;