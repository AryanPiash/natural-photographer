import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service
    const navigate = useNavigate()
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <CardGroup>
            <Card className='service mx-3 my-3 border-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3 fw-bold'>{name}</Card.Title>
                    <Card.Text className='fs-5 fw-bold'>Price: ${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Link to='/checkout' className='text-center'> <button className='w-50 mx-auto mb-4 shadow service-btn'>Book now</button></Link>

            </Card>
        </CardGroup>
    );
};

export default Service;