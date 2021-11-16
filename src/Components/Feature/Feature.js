import React from 'react';

const Feature = () => {
    return (
        <div>
            <h1 className="App orange mt-5"><b>Our Some Features</b></h1>
            <div className='row d-flex align-items-center App mt-5'>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/3T9XQ6t/feature1.png" alt="" />
                    <h4 className='mt-4'><b>Fresh Dishes</b></h4>
                    <bold>Lorem ipsum dolor sit amet, consectetur adipisicing elit</bold>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/GWQxFwj/feature2.png" alt="" />
                    <h4 className='mt-4'><b>Various Menu</b></h4>
                    <bold>Lorem ipsum dolor sit amet, consectetur adipisicing elit</bold>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/fYtYpgv/feature3.png" alt="" />
                    <h4 className='mt-4'><b>Well Service</b></h4>
                    <bold>Lorem ipsum dolor sit amet, consectetur adipisicing elit</bold>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/YtrZKNr/feature4.png" alt="" />
                    <h4 className='mt-4'><b>Fast Delivery</b></h4>
                    <bold>Lorem ipsum dolor sit amet, consectetur adipisicing elit</bold>
                </div>
            </div>
        </div>
    );
};

export default Feature;