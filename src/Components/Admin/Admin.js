import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const Admin = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1 className="App orange">Welcome to Admin Panel</h1> 
                <div className="mt-5 d-flex align-items-center gap-5">
                    <a href="/addFood"><h3>Add Food</h3></a>
                    <a href="/manageFood"><h3>Manage Food</h3></a>
                </div>
            </Container>
        </div>
    );
};

export default Admin;