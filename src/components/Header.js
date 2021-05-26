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
const Header = (props) => {
    return (
        <div style={{color:'rgb(255, 157, 157)',backgroundColor: 'rgb(49, 49, 49)',}}>
          <Jumbotron style={{height:'25%'}}>
  <h1 className="Header-base">{props.header}</h1>
  <p className="Header-base">
{props.section}
  </p>

</Jumbotron>
            <Nav>
  <Nav.Item>
    <Nav.Link  style={{color:'red'}}><Link className='header-link' to='/'>Home</Link>  </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:'red'}}><Link className='header-link' to='/About'>About me</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  style={{color:'red'}}><Link className='header-link' to='/Resume'>Resume</Link></Nav.Link>
  </Nav.Item>

</Nav>
        </div>
    )
}
export default Header