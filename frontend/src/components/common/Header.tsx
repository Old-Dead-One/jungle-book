import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaUsers, FaStore, FaEnvelope, FaBell, FaUser, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons
import SearchBar from './SearchBar';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container fluid>
                <Row className='w-100'>
                    <Col xs="auto" className="d-flex">
                        <Navbar.Brand as={Link} to="/">Junglebook</Navbar.Brand>
                        <SearchBar />
                    </Col>


                    <Col xs="auto">
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                <FaHome /> {/* Home icon */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/groups">
                                <FaUsers /> {/* Groups icon */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/marketplace">
                                <FaStore /> {/* Market icon */}
                            </Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs="auto">
                        <Nav>
                            <Nav.Link as={Link} to="/messages">
                                <FaEnvelope /> {/* Messages icon */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/notifications">
                                <FaBell /> {/* Notifications icon */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                <FaUser /> {/* Profile icon */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                <FaSignInAlt /> {/* Login icon */}
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    );
};

export default Header;
