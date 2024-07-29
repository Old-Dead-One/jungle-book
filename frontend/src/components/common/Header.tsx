import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Junglebook</Navbar.Brand>
                <SearchBar />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">News Feed</Nav.Link>
                        <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
                        <Nav.Link as={Link} to="/marketplace">Market</Nav.Link>
                        <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
                        <Nav.Link as={Link} to="/notifications">Notification</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
