import React from 'react';
import './NavBar.css';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        // <div className="navbar" data-bs-theme="dark">
        // </div>
            <Navbar expand="sm" className="topbar">
                <Container fluid className="parent">
                    <Navbar.Brand href='' className="left-element">
                        <NavLink to={'/'}>
                            <img src={process.env.PUBLIC_URL + '/TemporaryLogo.png'} alt='Home' className="logo"/>
                        </NavLink>
                    </Navbar.Brand>
                    <NavLink to={'/about'} className="link center-element">
                            About
                    </NavLink>
                    <div className="divider center-element">
                        |
                    </div>
                    <NavLink to={'/projects'} className="link center-element">
                            Projects
                    </NavLink>
                    <div className="divider center-element">
                        |
                    </div>
                    <NavLink to={'/contact'} className="link center-element">
                            Contact
                    </NavLink>
                </Container>
            </Navbar>
    )
}

export default NavBar;