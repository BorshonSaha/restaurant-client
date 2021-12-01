import React, { useEffect, useState } from 'react';
import { Col, ListGroup, Row, Image, Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Navbar from '../Navbar/Navbar';

const Cart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App">My Cart</h1>
            <div className="d-flex gap-5">
                <div className="col-md-9">
                    <ListGroup>
                        {
                            cart.map(food => (
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={2}>
                                            <Image className="cartImage" src={food.imgURL} />
                                        </Col>
                                        <Col md={2}>
                                            <span>{food.name}</span>
                                        </Col>
                                        <Col md={2}>
                                            <span>${food.price}</span>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control as="select" value={food.qty}>
                                                {[...Array(food.price).keys()].map((x) => (
                                                    <option key={x+1}>{x+1}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </div>
                <div className="col-md-3">
                    <h3>Subtotal ({cart.length}) items</h3>
                    <h4>Total: ${total}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;