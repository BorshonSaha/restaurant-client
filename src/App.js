import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Admin from './Components/Admin/Admin';
import AddFood from './Components/AddFood/AddFood';
import ManageFood from './Components/ManageFood/ManageFood';

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <Menu></Menu> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="admin" element={<Admin />} />
        <Route path="addFood" element={<AddFood />} />
        <Route path="manageFood" element={<ManageFood />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );

}

export default App;