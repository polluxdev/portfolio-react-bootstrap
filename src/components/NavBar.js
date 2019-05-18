import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';

class NavBar extends React.Component {
    render(){
        return(
            <Navbar collapseOnSelect expand="sm" className="navbar fixed-top">
                <Link to='/'>
                    <Navbar.Brand to='/'>unXplainable</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/home' className="nav-spa">Home</Link>
                        <Link to='/profile' className="nav-spa">Profile</Link>
                        <Link to='/contact' className="nav-spa">Contact</Link>
                        <Link to='/portfolio' className="nav-spa">Portfolio</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;