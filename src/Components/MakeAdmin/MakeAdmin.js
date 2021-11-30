import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
                <form>
                    <div className="from-group pt-3" >
                        <input type="text" id='name' className="form-control" name='name' placeholder="Enter Name" required />
                    </div>
                    <div className="from-group pt-3" >
                        <input type="email" id='email' className="form-control" name='email' placeholder="Enter Email" required />
                    </div>
                    <div className="from-group pt-3" >
                        <input type="number" id='number' className="form-control" name='number' placeholder="Enter Phone Number" required />
                    </div>
                    <div className="from-group pt-3" >
                        <input type="text" id='address' className="form-control" name='address' placeholder="Enter Address" required />
                    </div>
                    {/* <Button onClick={makeAdmin} className="mt-3">Submit</Button> */}
                    <div className="pt-3">
                        <input onClick={makeAdmin} type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default MakeAdmin;