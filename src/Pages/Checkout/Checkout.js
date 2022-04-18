import React from 'react';
import { Button, Form } from 'react-bootstrap';;

const Checkout = () => {
    const handleSubmit = event => {
        event.preventDefault()
        alert('Thank you for the booking.')
    }
 
    return (
        <div className="container">
            <div className='col-lg-6 mx-auto border rounded p-4 mt-5 bg-white'>
                <h2 className='text-center mb-3'>Booking Information</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required />
                     
                    </Form.Group>
                    
                    <Button style={{background:'#45b190'}} className='border-0 py-2 px-5' variant="primary" type="submit">
                        Confirm Booking
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;