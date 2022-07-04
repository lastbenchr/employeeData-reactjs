import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import './Header.css';


export default function Header() {
    return (
        <>
          <Navbar  ClassName="ml-auto" id='topScroll' bg="light" expand="lg"  >
  <Navbar.Brand href="#home"><h2>BrandName</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mobile-navlink ">
      <a href="#home" className="fancy-link container">
        <div className="screen">
          <span className="link1">Products</span>
          <span className="link2">Products</span>
        </div>
      </a>
      <a href="#link" className="fancy-link container">
        <div className="screen">
          <span className="link1">Download</span>
          <span className="link2">Download</span>
        </div>
      </a>
      <a href="#link" className="fancy-link container">
        <div className="screen">
          <span className="link1">Pricing</span>
          <span className="link2">Pricing</span>
        </div>
      </a>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>

        
    )
}
