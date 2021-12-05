import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const StaffList = () => {

    const [staff, setStaff] = useState([]);

    const deleteStaff = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/deleteStaff/${id}`, {
            method: 'DELETE'
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/getStaff')
            .then((response) => response.json())
            .then(data => setStaff(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">Staff List</h1>
            <Container>
            <Table striped bordered hover>
                    {
                        staff.length === 0 && <Spinner animation="border"></Spinner>
                    }
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        staff.map(staffs => <tbody><tr><td>{staffs.name}</td><td>{staffs.address}</td><td>{staffs.number}</td><td>{staffs.salary}</td><td><Button onClick={()=>deleteStaff(staffs._id)} variant="danger">Delete</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default StaffList;