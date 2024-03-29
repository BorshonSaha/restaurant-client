import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import "./Navbar.css";
import { UserContext } from "../../App";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { useHistory } from "react-router";
import firebase from "firebase/app";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admins, setAdmins] = useState([]);

  const history = useHistory();

  const {
    state: { cart },
  } = CartState();

  const logout = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signOut(provider)
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    fetch("https://restaurant-server5.onrender.com/getAdmin")
      .then((response) => response.json())
      .then((data) => setAdmins(data));
  }, []);

  const goToAdmin = () => {
    let x = true;
    for (let i = 0; i < admins.length; i++) {
      if (admins[i].email === loggedInUser.email) {
        x = false;
        history.push("/admin");
        break;
      }
    }
    if (x) {
      history.push("/notAdmin");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
      <div class="container-fluid">
        <div class="navbar-brand">
          {/* <img className='mainLogo' src="https://i.ibb.co/8x74Nqp/demo-Final.png" /> */}
          <h2 className="orange">‍🍳HungerzZ Kitchen👨‍🍳</h2>
        </div>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            {/* <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">Profile</a>
                        <a href="#" class="nav-item nav-link">Messages</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a> */}
          </div>
          <div class="navbar-nav ms-auto align-items-center gap-5">
            <Nav className="justify-content-end gap-3" activeKey="/home">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/home">
                    <h5>Home</h5>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/menu">
                    <h5>Menu</h5>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/aboutUs">
                    <h5>About Us</h5>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/myOrder">
                    <h5>My Order</h5>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {loggedInUser.name || (
                  <Nav.Link>
                    <Link to="/login">
                      <h5>LogIn</h5>
                    </Link>
                  </Nav.Link>
                )}
              </Nav.Item>
              {/* <Nav.Item>
                                <Nav.Link ><Link><h5 onClick={logout}>Logout</h5></Link></Nav.Link>
                            </Nav.Item> */}
              <Nav.Item>
                <Nav.Link>
                  <Link>
                    <h5 onClick={goToAdmin}>Admin</h5>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/cart">
                    <ShoppingCartIcon className="shoppingCart"></ShoppingCartIcon>
                    <label>({cart.length})</label>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
