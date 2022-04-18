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
        <Navbar style={{backgroundImage: 'linear-gradient(15deg, #17e6cd 30%, #286cfc 100%)'}} sticky='top' collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand className='text-dark fw-bold fs-4' as={Link} to="/">
                    Natural Photographer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="header-navbar ms-auto">
                        <Nav.Link className='text-white' href="/">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                        <Nav.Link className='text-white' href="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-white' href="/about">About Me</Nav.Link>
                   
                        {user ?
                            <Nav.Link className='text-warning  fw-bold pt-1' onClick={handleSignOut} as={Link} to="/login"> <h5>logout</h5> </Nav.Link>
                            :
                            <Nav.Link className='text-warning fw-bold pt-1' as={Link} to="/login"> <h5>Login</h5> </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
};

export default Header;