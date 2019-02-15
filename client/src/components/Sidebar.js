import React, { Component } from 'react';

class Categories extends Component {

    render() {
        return (
            <div>
                <div className="sidebar-div">
                    <p className="sidebar-header">About Snackers</p>
                    <p>Learn More</p>
                    <p>Contact Us</p>
                </div>
                <div className="sidebar-div">
                    <p className="sidebar-header">Snacks</p>
                    <p>Candy</p>
                    <p>Chips</p>
                    <p>Cookies/Chocolate</p>
                    <p>Popcorn</p>
                    <p>Pretzels</p>
                </div>
                <div className="sidebar-div">
                    <p className="sidebar-header">Drinks</p>
                    <p>Water</p>
                    <p>Coffee</p>
                    <p>Tea</p>
                    <p>Juice</p>
                    <p>Soft Drinks</p>
                </div>
                <div className="sidebar-div">
                    <p className="sidebar-header">Healthy</p>
                    <p>Protein Bars</p>
                    <p>Low fat</p>
                    <p>Gluten Free</p>
                </div>
                <div className="sidebar-div">
                    <p className="sidebar-header">Groceries</p>
                    <p>Breakfast</p>
                    <p>Herbs, Spices, Seasonings</p>
                    <p>Pasta & Noodles</p>
                </div>
                <div className="sidebar-div">
                    <p className="sidebar-header">Home Goods</p>
                    <p>Cleaning</p>
                    <p>Paper & Plastic</p>
                    <p>Laundry</p>
                    <p>Dishwashing</p>
                </div>
            </div>
        );
    };
}

export default Categories;