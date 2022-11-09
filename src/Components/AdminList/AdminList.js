import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const AdminList = () => {

    const [admin, setAdmin] = useState([]);
    const [updateID, setUpdateID] = useState();

    const updateAdmin = () => {
        const updateName = document.getElementById('name').value;
        const updateEmail = document.getElementById('email').value;
        const updateNumber = document.getElementById('number').value;
        const updateAddress = document.getElementById('address').value;

        const updateData = {updateName, updateEmail, updateNumber, updateAddress};

        fetch(`http://localhost:5000/updateAdmin/${updateID}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)
        })
        .then(response => response.json())
    }

    const editAdmin = (id) => {
        setUpdateID(id);
        // console.log(updateID);
        for (let i = 0; i < admin.length; i++) {
            if (admin[i]._id == id) {
                // console.log(admin[i].name, admin[i].price);
                document.getElementById('name').value = admin[i].name;
                document.getElementById('email').value = admin[i].email;
                document.getElementById('number').value = admin[i].number;
                document.getElementById('address').value = admin[i].address;
            }
        }
    }

    const deleteAdmin = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/deleteAdmin/${id}`, {
            method: 'DELETE'
        })
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
                        admin.map(admins => <tbody><tr><td>{admins.name}</td><td>{admins.email}</td><td>{admins.number}</td><td>{admins.address}</td><td><Button onClick={()=>deleteAdmin(admins._id)} variant="danger">Delete</Button></td><td><Button variant="success" onClick={()=>editAdmin(admins._id)}>Edit</Button></td></tr></tbody>)
                    }
                </Table>
                <h1 className="mt-5">Update Box</h1>
                <div className="from-group pt-3" >
                    <input type="text" id='name' className="form-control" name='name' required />
                </div>
                <div className="from-group pt-3" >
                    <input type="email" id='email' className="form-control" name='email' required />
                </div>
                <div className="from-group pt-3" >
                    <input type="number" id='number' className="form-control" name='number' required />
                </div>
                <div className="from-group pt-3" >
                    <input type="text" id='address' className="form-control" name='address' required />
                </div>
                <div className="from-group pt-3 mb-5" >
                    <Button onClick={updateAdmin}>Save Changes</Button>
                </div>
            </Container>
        </div>
    );
};

export default AdminList;