import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFood')
            .then((response) => response.json())
            .then(data => setFoods(data))
    }, [])

    const [state, dispatch] = useReducer(cartReducer, {
        foods: foods,
        cart:[]
    })

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
};

export default Context;
  
export const CartState = () => {
    return useContext(Cart);
}