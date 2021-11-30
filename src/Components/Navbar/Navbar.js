import React, { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import './Navbar.css';
import { UserContext } from '../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
            <div class="container-fluid">
                <div class="navbar-brand">
                    {/* <img className='mainLogo' src="https://i.ibb.co/8x74Nqp/demo-Final.png" /> */}
                    <h2 className="orange">Restaurant Management System</h2>
                </div>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        {/* <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">Profile</a>
                        <a href="#" class="nav-item nav-link">Messages</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a> */}
                    </div>
                    <div class="navbar-nav ms-auto align-items-center gap-3">
                        {/* <a href="/home" class="nav-item nav-link"><h5>Home</h5></a>
                        <a href="/menu" class="nav-item nav-link"><h5>Menu</h5></a>
                        {/* <a href="#" class="nav-item nav-link"><h5>Reservation</h5></a> */}
                       {/* <a href="/aboutUs" class="nav-item nav-link"><h5>About Us</h5></a>
                        {
                            loggedInUser.name || <a href="#" class="nav-item nav-link"><h5>Login</h5></a>
                        }
                        <a href="/admin" class="nav-item nav-link"><h5>Admin</h5></a>
                        <a href="/cart" class="nav-item nav-link"><ShoppingCartIcon className='shoppingCart'></ShoppingCartIcon></a> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;