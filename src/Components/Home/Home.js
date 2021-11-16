import React from 'react';
import { Container } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import FoodCarousel from '../FoodCarousel/FoodCarousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Time from '../Time/Time';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Header></Header>
                <FoodCarousel></FoodCarousel>
                <Feature></Feature>
                <Time></Time>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;