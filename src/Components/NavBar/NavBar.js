import '../NavBar/NavBar.css';
import { useHistory } from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Cart4, Heart, Wallet2, Person, BagFill } from 'react-bootstrap-icons';

const NavBar = () => {
    const history = useHistory()
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <img className='NavImg' src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Form className="d-flex w-50">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Nav className="me-right">
                        <Button onClick={()=>{history.push('/profile');}} variant='outline-success border-0'><Person className='Icon' /></Button>
                        <Button onClick={()=>{history.push('/wishlist');}} variant='outline-success border-0'><Heart className='Icon' /></Button>
                        <Button onClick={()=>{history.push('/cart');}} variant='outline-success border-0'><Cart4 className='Icon' /></Button>
                        <Button onClick={()=>{history.push('/orders');}} variant='outline-success border-0'><BagFill className='Icon' /></Button>
                        <Button onClick={()=>{history.push('/wallet');}} variant='outline-success border-0'><Wallet2 className='Icon' /></Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
