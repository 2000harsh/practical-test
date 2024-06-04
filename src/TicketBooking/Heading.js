import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../properties/logo2.jpeg";

const Heading = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "rgb(248, 68, 100)" }} expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={{ opacity: 0.5, height: "40px", width: "40px" }}
          />
        </Navbar.Brand>
        <Nav.Link className="nav" href="#home">
          Login
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  );
};

export default Heading;
