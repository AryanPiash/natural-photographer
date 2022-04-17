import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service
    const navigate = useNavigate()
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        // <div className='secvice'>
        //     <img src={img} alt="" />
        //     <h2>{name}</h2>
        //     <h4>Price: ${price}</h4>
        //     <p>{description}</p>
        //     <button onClick={() => navigateServiceDetail(id)} className='btn btn-primary my-3'>{name}</button>
        // </div>
        <CardGroup>
            <Card className='mx-3 my-3 border-0 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <button onClick={() => navigateServiceDetail(id)} className='btn btn-primary w-50 mx-auto my-4 shadow'>Book Now</button>
            </Card>
        </CardGroup>
    );
};

export default Service;