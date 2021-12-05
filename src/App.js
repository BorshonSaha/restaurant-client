import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import AboutUs from './Components/AboutUs/AboutUs';
import Admin from './Components/Admin/Admin';
import AddFood from './Components/AddFood/AddFood';
import ManageFood from './Components/ManageFood/ManageFood';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AdminList from './Components/AdminList/AdminList';
import AddStaff from './Components/AddStaff/AddStaff';
import StaffList from './Components/StaffList/StaffList';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import ManageOrderCooking from './Components/ManageOrderCooking/ManageOrderCooking';
import ManageOrderDelivered from './Components/ManageOrderDelivered.js/ManageOrderDelivered';
import ManageOrderCancel from './Components/ManageOrderCancel/ManageOrderCancel';

export const UserContext = createContext();
export const SubtotalContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [subtotal, setSubtotal] = useState();

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <SubtotalContext.Provider value={[subtotal, setSubtotal]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/menu">
            <Menu></Menu>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addFood">
            <AddFood></AddFood>
          </Route>
          <Route path="/manageFood">
            <ManageFood></ManageFood>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/adminList">
            <AdminList></AdminList>
          </Route>
          <Route path="/addStaff">
            <AddStaff></AddStaff>
          </Route>
          <Route path="/staffList">
            <StaffList></StaffList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/manageOrderCooking">
            <ManageOrderCooking></ManageOrderCooking>
          </Route>
          <Route path="/manageOrderDelivered">
            <ManageOrderDelivered></ManageOrderDelivered>
          </Route>
          <Route path="/manageOrderCancel">
            <ManageOrderCancel></ManageOrderCancel>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </SubtotalContext.Provider>
    </UserContext.Provider>
  );

}

export default App;