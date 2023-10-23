import React from "react";
import {Switch,Route,Routes, Link} from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap'
import Nav from 'react-bootstrap/Nav';
//import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Home from "./Components/Home";
import About from "./Components/About";
import address from "./Components/address";
import Navbar from "./Components/Navbar";
function App() {
return (
  <div>
    <h1>React Router Example</h1>
    <ul role="nav">
      <li><Link to="./Components/Home">Client Side</Link></li>
      <li><Link to="./Components/About">Server Side</Link></li>
    </ul>

  </div>
);
}
export default App;

