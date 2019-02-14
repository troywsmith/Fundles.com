import React, { Component } from 'react';
import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavTop extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Snackers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Snacks and Drinks Delivered Right To Your Door.</Nav.Link>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <NavDropdown title="My Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Sign In</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Your Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Your Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Your Recommendations</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default NavTop;

