import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const ManageFood = () => {

    const [manageFood, setManageFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFood')
            .then((response) => response.json())
            .then(data => setManageFood(data))
    }, [])

    const deleteFood = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1>Manage Food</h1>
                <Table striped bordered hover>
                    {
                        manageFood.length === 0 && <Spinner animation="border"></Spinner>
                    }
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        manageFood.map(food => <tbody><tr><td>{food.name}</td><td>{food.price}</td><td><Button onClick={() => deleteFood(food._id)} variant="danger">Delete</Button></td><td><Button variant="success">Edit</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default ManageFood;