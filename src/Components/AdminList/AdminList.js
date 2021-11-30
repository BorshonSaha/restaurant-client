import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const AdminList = () => {

    const [admin, setAdmin] = useState([]);

    const deleteAdmin = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/deleteAdmin/${id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    }

    useEffect(() => {
        fetch('http://localhost:5000/getAdmin')
            .then((response) => response.json())
            .then(data => setAdmin(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">Admin List</h1>
            <Container>
            <Table striped bordered hover>
                    {
                        admin.length === 0 && <Spinner animation="border"></Spinner>
                    }
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        admin.map(admins => <tbody><tr><td>{admins.name}</td><td>{admins.email}</td><td>{admins.number}</td><td>{admins.address}</td><td><Button onClick={()=>deleteAdmin(admins._id)} variant="danger">Delete</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default AdminList;