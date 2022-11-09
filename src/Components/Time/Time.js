import React from 'react';

const Time = () => {
    return (
        <div>
            <h1 className="App orange mt-5"><b>Our Schedule</b></h1>
            <div className='row d-flex align-items-center App mt-5'>
                <div className='col-md-3'>
                    <img src="https://i.ibb.co/KDpmqZ1/breakfast.png" alt="" />
                    <h4 className='mt-3'>Breakfast</h4>
                    <b>8.00 - 10.00 AM</b>
                </div>
                <div className='col-md-3'>
                    <img src="https://i.ibb.co/0jBBMG2/lunch.png" alt="" />
                    <h4 className='mt-3'>Lunch</h4>
                    <b>1.00 - 3.00 PM</b>
                </div>
                <div className='col-md-3'>
                    <img src="https://i.ibb.co/MpXCmT9/dinner.png" alt="" />
                    <h4 className='mt-3'>Dinner</h4>
                    <b>7.00 - 9.00 PM</b>
                </div>
                <div className='col-md-3'>
                    <img src="https://i.ibb.co/ynmsCwk/dessert.png" alt="" />
                    <h4 className='mt-3'>Dessert</h4>
                    <b>All Day</b>
                </div>
            </div>
        </div>
    );
};

export default Time;