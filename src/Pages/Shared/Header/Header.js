import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase_init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Natural Photographer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="header-navbar ms-auto">
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="/checkout">Check Out</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                   
                        {user ?
                            <Nav.Link onClick={handleSignOut} as={Link} to="/login"> logout </Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
};

export default Header;