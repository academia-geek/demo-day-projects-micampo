import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsHeart} from 'react-icons/bs'
import { Logo} from '../Styles/Home';

const Nav1 = () => {
   return (
   <>
   <Navbar className='fondo' expand="lg">
      <Container>
        <Navbar.Brand href="/home"><Logo src="https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className='navbar' href="/home">Inicio</Nav.Link>
            <Nav.Link className='navbar' href="/aliados">Aliados</Nav.Link>
            <Nav.Link className='navbar' href="/agroinsumos">Agroinsumos</Nav.Link>
            <Nav.Link className='navbar' href="/mercado">Mercado</Nav.Link>
            <Nav.Link className='navbar' href="/nosotros">Sobre Nosotros</Nav.Link>
            <button>Iniciar Sesión</button>
            <div><BsHeart/></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
   )
}

export default Nav1