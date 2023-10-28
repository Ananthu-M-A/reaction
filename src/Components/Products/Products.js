import React from 'react';
import '../Products/Products.css';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';

    const productsData = [
        {
            "id": 1,
            "name": "Apple Iphone 14 Pro",
            "price": "₹95000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 2,
            "name": "Apple Iphone XS Max",
            "price": "₹25000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 3,
            "name": "Apple Iphone 12",
            "price": "₹60000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 4,
            "name": "Apple Iphone 13 Pro",
            "price": "₹90000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 5,
            "name": "Apple Iphone 11 Pro Max",
            "price": "₹30000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 6,
            "name": "Apple Iphone 14 Pro",
            "price": "₹115000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 7,
            "name": "Apple Iphone XR",
            "price": "₹35000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        },
        {
            "id": 8,
            "name": "Apple Iphone X",
            "price": "₹20000",
            "image_url": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
        }
    ]

    const Products = () => {
        return (
            <Container>
                <Row className='p-3'>
                    {productsData.map((product) => (
                        <Col key={product.id}>
                            <Card className='text-center mt-3' style={{ width: '15rem', height: '27rem' }}>
                                <Card.Img className='w-75 p-3 m-4' variant="top" src={product.image_url} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        <h5>{product.price}</h5>
                                    </Card.Text>
                                    <Button className='g-3' variant="primary">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
    

export default Products;