import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Container, Table, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/getOrder?email=' + loggedInUser.email)
            .then((response) => response.json())
            .then(data => setOrders(data))
    }, [])

    // console.log(order);

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App orange mt-5">My Orders</h1>
            <Container>
                <Table striped bordered hover>
                    {
                        orders.length === 0 && <Spinner animation="border"></Spinner>
                    }
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Food Name & Quantity</th>
                            <th>Total Amount</th>
                            <th>Order Date(M/D/Y) & Time</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody><tr><td>{order._id}</td><td>{order.items}</td><td>{order.totalAmount}</td><td>{order.date} , {order.time}</td><td>Paid</td><td>{order.status}</td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default MyOrder;