import React, { Component } from 'react';

class BuyButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.product.a_prod_no,
			name: props.product.desc_1,
			price: props.product.curr_cost,
			weight: props.product.weight,
			description: props.product.desc_1,
			url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
		}
	}

	render() {
		return (
			<button
				className="snipcart-add-item BuyButton"
				data-item-id={this.state.id}
				data-item-name={this.state.name}
				data-item-price={this.state.price}
				data-item-weight={this.state.weight}
				data-item-url={this.state.url}
				data-item-description={this.state.description}
				data-item-price={this.state.price}>
				ADD TO CART
			</button>
		);
	}
}

export default BuyButton;