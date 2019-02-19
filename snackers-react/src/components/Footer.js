// React Imports
import React, { Component } from 'react';


class Header extends React.Component {

    render() {
        return (
            <footer className="App-footer">
                <div className="left">
                    Made by <a href="https://github.com/troywsmith" target="_blank" rel="noopener noreferrer">Troy Smith</a>
                </div>
                <div className="right">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                </div>
            </footer>
        );
    }
}

export default Header