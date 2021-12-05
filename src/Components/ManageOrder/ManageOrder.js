import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllOrder?status=' + 'Pending')
            .then((response) => response.json())
            .then(data => setOrders(data))
    }, [])

    // console.log(orders);

    const updateStatus = (id, newStatus) => {
        // console.log(id, newStatus);
        const updatedStatus = {newStatus};
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedStatus)
        })
        .then(response => response.json())
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">Manage Order(Pending)</h1>
            <Table striped bordered hover>
                {
                    orders.length === 0 && <Spinner animation="border"></Spinner>
                }
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>Food Name & Quantity</th>
                        <th>Total Amount</th>
                        <th>Order Date(M/D/Y) & Time</th>
                        <th>Address</th>
                        <th>Order Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tbody><tr><td>{order._id}</td><td>{order.email}</td><td>{order.items}</td><td>{order.totalAmount}</td><td>{order.date} , {order.time}</td><td>{order.card.address_line1}, {order.card.address_city}, {order.card.address_zip}</td><td>{order.status}</td><td><Button onClick={() => updateStatus(order._id, 'Cooking')}>Cooking</Button></td><td><Button onClick={() => updateStatus(order._id, 'Delivered')} variant="success">Delivered</Button></td><td><Button onClick={() => updateStatus(order._id, 'Cancel')} variant="danger">Cancel</Button></td></tr></tbody>)
                }
            </Table>
        </div>
    );
};

export default ManageOrder;