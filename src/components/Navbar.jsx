
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi'
import {AiOutlineLogin} from 'react-icons/ai';
import { Boton, Iconos } from '../Styles/Home';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Nav1 = () => {
   return (
      <>
         <Navbar key='md' expand='md' className='fondo' style={{ color: 'white', backgroundColor: '#699A07' }} >
            <Container fluid >
               <Navbar.Brand href='#'>
                  <img
                  width="60"
                  height="60"
                     className="d-inline-block align-top logo"
                     src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                     alt='logo'
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
               <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-md`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                  placement='end'>
                  <Offcanvas.Header closeButton>
                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        <img
                           width="60"
                           height="60"
                           className="d-inline-block align-top "
                           src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                           alt='logo'
                        />
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className='flex-grow-1 pe-3 letras'>
                        <Iconos>
                        <Nav.Link className='navbar' href="/home">Inicio</Nav.Link>
                        <Nav.Link className='navbar' href="/aliados">Aliados</Nav.Link>
                        <Nav.Link className='navbar' href="/agroinsumos">Agroinsumos</Nav.Link>
                        <Nav.Link className='navbar' href="/mercado">Mercado</Nav.Link>
                        <Nav.Link className='navbar' href="/nosotros">Sobre Nosotros</Nav.Link>
                        </Iconos>
                        <Boton>Iniciar Sesión <AiOutlineLogin/> </Boton>
                        <Iconos>
                        <Nav.Link className='navbar' href="/home"><BsHeart /></Nav.Link>
                        <Nav.Link className='navbar' href="/home"><FiShoppingCart /></Nav.Link>
                        <Nav.Link className='navbar' href="/home"><FaUserCircle /></Nav.Link>
                        </Iconos>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      </>
   )
}

export default Nav1