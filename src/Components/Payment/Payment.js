import React, { useState, useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { SubtotalContext, UserContext } from '../../App';
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const Payment = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [subtotal, setSubtotal] = useContext(SubtotalContext);

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [success, setSuccess] = useState(false);

    const onToken = (token) => {
        // console.log(token.card);
        const paymentInfo = {
            items: ' ',
            totalAmount: subtotal,
            status: 'Pending',
            email: loggedInUser.email,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            card: token.card
        };
    
        for(let i=0; i<cart.length; i++) {
            paymentInfo.items += cart[i].name + ' x ' + cart[i].qty + ', ';
        }
    
        // console.log(paymentInfo);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paymentInfo)
        })
            .then(response => response.json())
            .then(setSuccess(true))
    }

    if (success) {
        cart.length = 0;
    }

    return (
        <div className="App">
            <Navbar></Navbar>
            <h1 className="App mt-5 orange">Payment Page</h1>
            <StripeCheckout
                className="mt-5"
                token={onToken}
                stripeKey="pk_test_51Ie2NsBLx6AtoZTQNHIhxGylq1l0ZsT44qSVhFAbCDyptm6LlyvVW9eMyH7TjzgmsjjooTb1VwkmFjcXW7OAzYGY00b9V8ZKnA"
                billingAddress
                shippingAddress
                amount={subtotal * 100}
                name={`Total ${cart.length} Items`}
            />
            {success && <h5 className="mt-3" style={{ color: 'green' }}>Payment Successfully Completed!!</h5>}
            {success && <Link to="/menu"><Button>Order More</Button></Link>}
        </div>
    );
};

export default Payment;