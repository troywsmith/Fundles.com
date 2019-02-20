// React Imports
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()
        this.props.push(`${this.state.query}`)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='query'
                    value={this.state.query}
                    onChange={this.handleInput}
                    className="search-products"
                    placeholder="Search for a product..."
                />
            </form>
        )
    }
}

export default SearchBar