import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const AddStaff = () => {

    const addStaff = () => {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const number = document.getElementById('number').value;
        const salary = document.getElementById('salary').value;

        // console.log(name, address, salary, number);
        const staffData = { name, address, number, salary };

        fetch('http://localhost:5000/addStaff', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(staffData)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">Add Staff</h1>
            <Container>
                <Form>
                    <Form.Group className="pt-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="address">
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="number">
                        <Form.Control type="number" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="pt-3" controlId="salary">
                        <Form.Control type="number" placeholder="Enter salary" />
                    </Form.Group>

                    <Button className="mt-3" onClick={addStaff} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddStaff;