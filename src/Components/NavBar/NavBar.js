import React from 'react';
import '../NavBar/NavBar.css'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Cart4, Heart, Wallet2 ,Person, BagFill } from 'react-bootstrap-icons';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <img className='NavImg' src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Form className="d-flex w-50">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="me-right">
                        <Nav.Link href="#Profile"><Person className='Icon' /></Nav.Link>
                        <Nav.Link href="#Wishlist"><Heart className='Icon' /></Nav.Link>
                        <Nav.Link href="#Cart"><Cart4 className='Icon' /></Nav.Link>
                        <Nav.Link href="#Orders"><BagFill className='Icon' /></Nav.Link>
                        <Nav.Link href="#Wallet"><Wallet2 className='Icon' /></Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
