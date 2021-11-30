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
import Cart from './Components/Cart/Cart';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AdminList from './Components/AdminList/AdminList';
import AddStaff from './Components/AddStaff/AddStaff';
import StaffList from './Components/StaffList/StaffList';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          {/* <Route path="/admin">
            <Admin></Admin>
          </Route> */}
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
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );

}

export default App;