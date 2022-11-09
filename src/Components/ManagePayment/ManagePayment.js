import React, { useEffect, useState } from "react";
import { Table, Button, Spinner, Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

const ManagePayment = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-server5.onrender.com/getPaymentInfo")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  // console.log(orders);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="App">Manage Payment</h1>
      <Table striped bordered hover>
        {orders.length === 0 && <Spinner animation="border"></Spinner>}
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Card ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Order Date(M/D/Y) & Time</th>
            <th>Total Amount</th>
            <th>Card Brand/Funding</th>
            <th>Last 4 digit</th>
            <th>Exp Month & Year</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.card.id}</td>
              <td>{order.card.name}</td>
              <td>{order.email}</td>
              <td>
                {order.date} , {order.time}
              </td>
              <td>{order.totalAmount}</td>
              <td>
                {order.card.brand}/{order.card.funding}
              </td>
              <td>{order.card.last4}</td>
              <td>
                {order.card.exp_month}/{order.card.exp_year}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManagePayment;
