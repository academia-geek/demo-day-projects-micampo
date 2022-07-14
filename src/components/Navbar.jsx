import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Styles/Home';

const Nav1 = () => {
   const navigate = useNavigate()
   return (
   <>
   <Navbar  style={{backgroundColor:'#699A07'}} expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/aliados">Aliados</Nav.Link>
            <Nav.Link href="/agroinsumos">Agroinsumos</Nav.Link>
            <Nav.Link href="/mercado">Mercado</Nav.Link>
            <Nav.Link href="/nosotros">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Navbar expand="lg">
      <Container>
        <Navbar.Brand><Logo src="https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Aliados</Nav.Link>
            <Nav.Link href="#link">Agroinsumos</Nav.Link>
            <Nav.Link href="#link">Mercado</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
   )
}

export default Nav1