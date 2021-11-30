import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
                <div className="from-group pt-3" >
                    <input type="text" id='name' className="form-control" name='name' placeholder="Enter Name" required />
                </div>
                <div className="from-group pt-3" >
                    <input type="text" id='address' className="form-control" name='address' placeholder="Enter Address" required />
                </div>
                <div className="from-group pt-3" >
                    <input type="number" id='number' className="form-control" name='number' placeholder="Enter Phone Number" required />
                </div>
                <div className="from-group pt-3" >
                    <input type="number" id='salary' className="form-control" name='salary' placeholder="Enter Salary" required />
                </div>
                <Button className="mt-3" onClick={addStaff}>Submit</Button>
            </Container>
        </div>
    );
};

export default AddStaff;