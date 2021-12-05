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
                <div className="mt-5 d-flex align-items-center">
                    <div className="col-md-3"><Link to="/addFood"><h3>Add Food</h3></Link></div>
                    <div className="col-md-3"><Link to="/manageFood"><h3>Manage Food</h3></Link></div>
                    <div className="col-md-3"><Link to="/makeAdmin"><h3>Make Admin</h3></Link></div>
                    <div className="col-md-3"><Link to="/adminList"><h3>Admin List</h3></Link></div>
                </div>

                <div className="mt-5 d-flex align-items-center">
                    <div className="col-md-3"><Link to="/addStaff"><h3>Add Staff</h3></Link></div>
                    <div className="col-md-3"><Link to="/staffList"><h3>Staff List</h3></Link></div>
                    <div className="col-md-3"><Link to="/manageOrder"><h3>Manage Order(Pending)</h3></Link></div>
                    <div className="col-md-3"><Link to="/manageOrderCooking"><h3>Manage Order(Cooking)</h3></Link></div>
                </div>

                <div className="mt-5 d-flex align-items-center">
                    <div className="col-md-4"><Link to="/manageOrderDelivered"><h3>Manage Order(Delivered)</h3></Link></div>
                    <div className="col-md-4"><Link to="/manageOrderCancel"><h3>Manage Order(Cancel)</h3></Link></div>
                    <div className="col-md-4"><Link to="/managePayment"><h3>Manage Payment</h3></Link></div>
                </div>

            </Container>
        </div>
    );
};

export default Admin;