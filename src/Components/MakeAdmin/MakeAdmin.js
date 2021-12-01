import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const MakeAdmin = () => {

    const makeAdmin = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const address = document.getElementById('address').value;

        // console.log(name, email, number, address);
        const adminData = { name, email, number, address };

        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">Make Admin</h1>
            <Container>
                <Form>
                    <Form.Group className="pt-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="email">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="number">
                        <Form.Control type="number" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="address">
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>

                    <Button className="mt-3" onClick={makeAdmin} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;