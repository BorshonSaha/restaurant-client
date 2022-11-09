import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const ManageFood = () => {

    const [manageFood, setManageFood] = useState([]);
    const [updateID, setUpdateID] = useState();

    const updateData = () => {
        // console.log(updateID);
        const updateName = document.getElementById('name').value;
        const updatePrice = document.getElementById('price').value;

        const updateData = {updateName, updatePrice};
        // console.log(updateData);

        fetch(`http://localhost:5000/update/${updateID}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)
        })
        .then(response => response.json())
    }

    const editFood = (id) => {
        setUpdateID(id);
        // console.log(id);
        for (let i = 0; i < manageFood.length; i++) {
            if (manageFood[i]._id == id) {
                // console.log(manageFood[i].name, manageFood[i].price);
                document.getElementById('name').value = manageFood[i].name;
                document.getElementById('price').value = manageFood[i].price;
            }
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/getFood')
            .then((response) => response.json())
            .then(data => setManageFood(data))
    }, [])

    const deleteFood = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1>Manage Food</h1>
                <Table striped bordered hover className="App">
                    {
                        manageFood.length === 0 && <Spinner animation="border"></Spinner>
                    }
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        manageFood.map(food => <tbody><tr><td>{food.name}</td><td>{food.price}</td><td><Button onClick={() => deleteFood(food._id)} variant="danger">Delete</Button></td><td><Button onClick={() => editFood(food._id)} variant="success">Update</Button></td></tr></tbody>)
                    }
                </Table>
                
                <h1 className="mt-5">Update Box</h1>
                <div className="from-group pt-3" >
                    <input type="text" id='name' className="form-control" name='name' required />
                </div>
                <div className="from-group pt-3" >
                    <input type="text" id='price' className="form-control" name='price' required />
                </div>
                <div className="from-group pt-3 mb-5" >
                    <Button onClick={updateData}>Save Changes</Button>
                </div>
            </Container>
        </div>
    );
};

export default ManageFood;
