import React, { Component } from 'react';
// import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

class Categories extends Component {

    render() {
        return (
            <div>
                <div className="categories">
                    {
                        this.props.categories ?
                            [...this.props.categories].map(categorie => {
                                return (
                                    <button className="button-category">{categorie.split(' ')[0]}</button>
                                )
                            }) : null
                    }
                </div>
            </div>
        );
    };
}

export default Categories;