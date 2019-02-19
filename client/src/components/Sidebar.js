import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {

    render() {
        return (
            <div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/about'>About Snackers </Link>
                    <p>Learn More</p>
                    <p>Contact Us</p>
                </div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/snacks'>Snacks </Link>
                    <p>Candy</p>
                    <p>Chips</p>
                    <p>Cookies/Chocolate</p>
                    <p>Popcorn</p>
                    <p>Pretzels</p>
                </div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/drinks'>Drinks </Link>
                    <p>Water</p>
                    <p>Coffee</p>
                    <p>Tea</p>
                    <p>Juice</p>
                    <p>Soft Drinks</p>
                </div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/healthy'>Healthy</Link>
                    <p>Protein Bars</p>
                    <p>Low fat</p>
                    <p>Gluten Free</p>
                </div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/grocery'>Groceries </Link>
                    <p>Breakfast</p>
                    <p>Herbs, Spices, Seasonings</p>
                    <p>Pasta & Noodles</p>
                </div>
                <div className="sidebar-div">
                    <Link className="sidebar-header" to='/home_goods'>Home Goods </Link>
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