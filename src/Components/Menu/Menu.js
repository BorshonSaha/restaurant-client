import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuCard from '../MenuCard/MenuCard';
import Navbar from '../Navbar/Navbar';

const Menu = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFood')
            .then(res => res.json())
            .then(data => setFoods(data));
    })

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="App orange mt-5"><b>Our Menu</b></h1>
            <Container>
                <div className='App mt-5'>
                    {
                        foods.length === 0 && <Spinner animation="border"></Spinner>
                    }
                </div>
                <div className='row App mt-5'>
                    {
                        foods.map(food => <MenuCard food={food}></MenuCard>)
                    }
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Menu;