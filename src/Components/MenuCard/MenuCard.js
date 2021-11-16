import React from 'react';
import { Button } from 'react-bootstrap';
import './MenuCard.css';

const MenuCard = ({ food }) => {

    return (
            <div className="col-md-4">
                <div className={`d-flex justify-content-center`}>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <img className='foodImg' src={food.imgURL} alt="" />
                            <h3>{food.name}</h3>
                            <h4>$ {food.price}</h4>
                            <Button>Add to Basket</Button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MenuCard;