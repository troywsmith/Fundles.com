import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Categories extends Component {

    render() {

        return (
            <div>
                <div className="categories">
                    {
                        this.props.categories ?
                            this.props.categories.map(categorie => {
                                return (
                                    <button className="button-category">
                                        <Link to={`/${categorie}`.toLowerCase()} className="category-link">{categorie.replace(/_/g, ' ')}</Link>
                                    </button>
                                )
                            }) : null
                    }
                </div>
            </div>
        );
    };
}

export default Categories;