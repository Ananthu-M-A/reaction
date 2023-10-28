import React from 'react';
import '../Footer/Footer.css';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Card className='bg-dark text-light rounded-0'>
                <Card.Body>
                <img className='FooterLogo' src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
                </Card.Body>
                <Card.Header as="p">© All Rights are Reserved... Designed by Ananthu M A....
Distributed By Smart-Depot....</Card.Header>
            </Card>
        </>
    )
}

export default Footer;