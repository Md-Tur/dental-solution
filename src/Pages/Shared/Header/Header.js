import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="offers">Offers</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="checkout">Checkout</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user
                                    ?
                                    <Nav.Link className='text-white' as={Link} to="login" onClick={handleSignOut}>
                                        Sign Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;