import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './logos.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../Hero/Hero';
import TentangKami from '../Hero/Tentang';
import FiturKami from '../Hero/Fitur';
import Login from '../Login/Login';

function Navi() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link onClick={() => setActiveSection("hero")}>Beranda</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setActiveSection("tentang")}>Tentang</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setActiveSection("fitur")}>Fitur</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setActiveSection("login")}>Masuk</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {activeSection === "hero" && <Hero />}
        {activeSection === "tentang" && <TentangKami />}
        {activeSection === "fitur" && <FiturKami />}
        {activeSection === "login" && <Login />}
      </Container>
    </div>
  );
}

export default Navi;
