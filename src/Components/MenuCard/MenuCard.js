import React from 'react';
import { Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './MenuCard.css';

const MenuCard = ({ food }) => {

    function addToBasket (name, price) {
        localStorage.setItem(name, price);

        // console.log(allStorage());
        const items = {...localStorage};
        console.log(items);
        
    }

    return (
        <div className="col-md-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className='foodImg' src={food.imgURL} alt="" />
                        <h3>{food.name}</h3>
                        <h4>$ {food.price}</h4>
                        <Button onClick={() => addToBasket(food.name, food.price)}>Add to Basket</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;