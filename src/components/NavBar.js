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
            <Navbar bg="dark" expand="sm" className="topbar">
                <Container fluid>
                    <Navbar.Brand href='#'>
                        <NavLink to={'/'}>
                            <img src='' alt='Home Button' />
                        </NavLink>
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default NavBar;