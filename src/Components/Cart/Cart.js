import React, { useEffect, useState } from 'react';
import { Col, ListGroup, Row, Image, Form, Button } from 'react-bootstrap';
import AddFood from '../AddFood/AddFood';
import { CartState } from '../context/Context';
import Navbar from '../Navbar/Navbar';
import { TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

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
                    <ListGroup className="p-3">
                        {
                            cart.map(food => (
                                <ListGroup.Item>
                                    <Row className="align-items-center">
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
                                            <Form.Control
                                                as="select"
                                                value={AddFood.qty}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: "CHANGE_CART_QTY",
                                                        payload: {
                                                            id: food._id,
                                                            qty: e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                {[...Array(5).keys()].map((x) => (
                                                    <option key={x + 1}>{x + 1}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: food,
                                                    })
                                                } className="mt-2" variant="danger"><TrashIcon className="shoppingCart"></TrashIcon></Button>
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
                    <Link to="/checkout"><Button>Proceed to Checkout</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;