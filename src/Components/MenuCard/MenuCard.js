import React from 'react';
import { Button } from 'react-bootstrap';
import { CartState } from '../context/Context';
import './MenuCard.css';

const MenuCard = ({ food }) => {

    const {
        state: {cart},
        dispatch,
    } = CartState();

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
                        {
                            cart.some(p => p._id === food._id) ? (
                                <Button onClick={()=>{
                                    dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload: food,
                                    })
                                }} variant='danger'>Remove From Cart</Button>
                            ) : (
                                <Button onClick={()=>{
                                    dispatch({
                                        type:"ADD_TO_CART",
                                        payload: food,
                                    })
                                }}>Add To Cart</Button>
                            )
                        }
                        {/* <Button onClick={() => addToBasket(food.name, food.price)}>Add to Basket</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;