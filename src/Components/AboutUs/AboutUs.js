import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1 className="App orange mt-5">CEO Info</h1>
                <div className='row d-flex mt-5 App'>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/85V4LqT/ceo2.png" alt="" />
                        <h2 className='mt-3'>Mr. David John</h2>
                        <b>Founder & CEO</b>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/85V4LqT/ceo2.png" alt="" />
                        <h2 className='mt-3'>Mr. David John</h2>
                        <b>Founder & CEO</b>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/85V4LqT/ceo2.png" alt="" />
                        <h2 className='mt-3'>Mr. David John</h2>
                        <b>Founder & CEO</b>
                    </div>
                </div>

                <h1 className="App orange mt-5">Chef Info</h1>
                <div className='row d-flex mt-5 App'>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/H2DbY5J/chef4.png" alt="" />
                        <h2 className='mt-3'>Alex Wilson</h2>
                        <b>Head Chef</b>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/H2DbY5J/chef4.png" alt="" />
                        <h2 className='mt-3'>Alex Wilson</h2>
                        <b>Head Chef</b>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://i.ibb.co/H2DbY5J/chef4.png" alt="" />
                        <h2 className='mt-3'>Alex Wilson</h2>
                        <b>Head Chef</b>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;