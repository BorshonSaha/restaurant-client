import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const AddFood = () => {

    const [imgUrl, setImgUrl] = useState();

    const handleSubmit = () => {
        const name = document.getElementById('foodName').value;
        const price = document.getElementById('foodPrice').value;
        const imgURL = imgUrl;
        const food = { name, price, imgURL };
        fetch('http://localhost:5000/addFood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(food)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'ec585676253f01bc8213ab2e0e8976e9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
                alert('Image uploaded');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1>Add Food</h1>
                <Form>
                    <Form.Group controlId="foodName" className="mt-3">
                        <Form.Label>Food Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="foodPrice" className="mt-3">
                        <Form.Label>Food Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mt-3">
                        <Form.Label>Upload Image (Wait until the pop-up message shown)</Form.Label>
                        <Form.Control onChange={handleImage} type="file" />
                    </Form.Group>

                    <Button onClick={handleSubmit} className="mt-3" variant="primary">Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddFood;