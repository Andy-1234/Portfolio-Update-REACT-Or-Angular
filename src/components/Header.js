import React from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav"
import navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import navlink from "react-bootstrap/NavLink"
import Jumbotron from "react-bootstrap/Jumbotron"
import {useLocation} from 'react-router-dom'


//just a example on us js for css classes
/*
style{headingStyle}

const headingStyle = {
    color:'red',
    backgroundColor: 'black'
}*/
const Header = () => {
    return (
        <div style={{backgroundColor: 'darkgray'}}>
          <Jumbotron style={{height:'25%'}}>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>

</Jumbotron>
            <Nav>
  <Nav.Item>
    <Nav.Link to="/" style={{color:'red'}}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="./About" style={{color:'red'}}>About me</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/resume" style={{color:'red'}}>Resume</Nav.Link>
  </Nav.Item>

</Nav>
        </div>
    )
}
export default Header