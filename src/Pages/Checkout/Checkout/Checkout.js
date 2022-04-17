import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-3'>Please checkout here</h2>
            <p className='text-center'>Please provide some informations about you.</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="Phone Number" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Proceed Checkout
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;