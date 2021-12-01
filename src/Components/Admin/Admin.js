import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1 className="App orange">Welcome to Admin Panel</h1> 
                <div className="mt-5 d-flex align-items-center gap-5">

                    <Link to="/addFood"><h3>Add Food</h3></Link>
                    <Link to="/manageFood"><h3>Manage Food</h3></Link>
                    <Link to="/makeAdmin"><h3>Make Admin</h3></Link>
                    <Link to="/adminList"><h3>Admin List</h3></Link>
                    <Link to="/addStaff"><h3>Add Staff</h3></Link>
                    <Link to="/staffList"><h3>Staff List</h3></Link>

                    {/* <a href="/addFood"><h3>Add Food</h3></a>
                    <a href="/manageFood"><h3>Manage Food</h3></a>
                    <a href="/makeAdmin"><h3>Make Admin</h3></a>
                    <a href="/adminList"><h3>Admin List</h3></a>
                    <a href="/addStaff"><h3>Add Staff</h3></a>
                    <a href="/staffList"><h3>Staff List</h3></a> */}
                </div>
            </Container>
        </div>
    );
};

export default Admin;