import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Categories extends Component {

    render() {
        return (
            <div>
                <div className="categories">
                    <button className="button-category">
                        <Link to='/snacks' className="category-link">Snacks </Link>
                    </button>
                    <button className="button-category">
                        <Link to='/drinks' className="category-link">Drinks </Link>
                    </button>
                    <button className="button-category">
                        <Link to='/healthy' className="category-link">Healthy </Link>
                    </button>
                    <button className="button-category">
                        <Link to='/grocery' className="category-link">Groceries </Link>
                    </button>
                    <button className="button-category">
                        <Link to='/homegoods' className="category-link">Home Goods </Link>
                    </button>
                    {/* {
                        this.props.categories ?
                            this.props.categories.map(categorie => {
                                return (
                                    <button className="button-category">{categorie.split(' ')[0]}</button>
                                )
                            }) : null
                    } */}
                </div>
            </div>
        );
    };
}

export default Categories;