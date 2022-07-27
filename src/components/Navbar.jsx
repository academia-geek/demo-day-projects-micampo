import React, { useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineLogin } from 'react-icons/ai';
import { Boton, Iconos } from '../Styles/Home';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Nav1 = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [user, setUser] = useState(null);
   const navigate = useNavigate();
   const logged = useSelector((state) => state.loginCheck.loginCheck);
   const userValidation = useSelector((state) => state.user);
   const users = useSelector((state) => state.users.users);

   const validateUser = async () => {
      const findUser = users?.find(
         (user1) => user1.data.uid === userValidation.uid
      );
      setUser(findUser);
   };
   useEffect(() => {
      if (userValidation.uid) {
         validateUser();
      }
   }, [users]);

   const handleOpenSnackbar = () => {
      setIsOpen(true);
   };

   const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setIsOpen(false);
   };

   return (
      <>
         <Navbar
            key='md'
            expand='md'
            className='fondo'
            style={{ color: 'white', backgroundColor: '#699A07' }}>
            <Container fluid>
               <Navbar.Brand
                  onClick={() => navigate(logged ? '/home' : '/lg/home')}>
                  <img
                     width='60'
                     height='60'
                     className='d-inline-block align-top logo'
                     src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                     alt='logo'
                  />
               </Navbar.Brand>
               <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-md`}
                  className={'offcanvas'}
               />
               <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-md`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                  placement='end'>
                  <Offcanvas.Header closeButton>
                     <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-md`}
                        style={{ backgroundColor: 'red' }}>
                        <img
                           width='60'
                           height='60'
                           className='d-inline-block align-top '
                           src='https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png'
                           alt='logo'
                        />
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className='flex-grow-1 pe-3 letras '>
                        <Iconos>
                           <Nav.Link
                              className='navbar'
                              onClick={() =>
                                 navigate(logged ? '/home' : '/lg/home')
                              }>
                              Inicio
                           </Nav.Link>
                           <Nav.Link
                              className='navbar'
                              onClick={() =>
                                 navigate(logged ? '/aliados' : '/lg/aliados')
                              }>
                              Aliados
                           </Nav.Link>
                           <Nav.Link
                              className='navbar'
                              onClick={() =>
                                 navigate(
                                    logged ? 'productos' : '/lg/productos'
                                 )
                              }>
                              Productos
                           </Nav.Link>
                           {logged && user ? (
                              <>
                                 {user.data.type !== 'comprador' && (
                                    <Nav.Link
                                       className='navbar'
                                       onClick={() =>
                                          navigate(
                                             logged
                                                ? 'agroinsumos'
                                                : '/lg/agroinsumos'
                                          )
                                       }>
                                       Agroinsumos
                                    </Nav.Link>
                                 )}
                              </>
                           ) : (
                              <Nav.Link
                                 className='navbar'
                                 onClick={() =>
                                    navigate(
                                       logged
                                          ? 'agroinsumos'
                                          : '/lg/agroinsumos'
                                    )
                                 }>
                                 Agroinsumos
                              </Nav.Link>
                           )}
                           <Nav.Link
                              className='navbar'
                              onClick={() =>
                                 navigate(logged ? '/mercado' : '/lg/mercado')
                              }>
                              Mercado
                           </Nav.Link>
                           {/* <Nav.Link
                              className='navbar'
                              onClick={() =>
                                 navigate(
                                    logged
                                       ? '/sobre-nosotros'
                                       : '/lg/sobre-nosotros'
                                 )
                              }>
                              Sobre Nosotros
                           </Nav.Link> */}
                        </Iconos>
                        {!logged && (
                           <Boton onClick={() => navigate(!logged && '/login')}>
                              Iniciar Sesión <AiOutlineLogin />{' '}
                           </Boton>
                        )}
                        <Iconos>
                           <Nav.Link
                              className='navbar'
                              onClick={
                                 logged
                                    ? () =>
                                         navigate(logged ? '/home' : '/lg/home')
                                    : handleOpenSnackbar
                              }>
                              <BsHeart />
                           </Nav.Link>
                           <Nav.Link
                              className='navbar'
                              onClick={
                                 logged
                                    ? () =>
                                         navigate(logged ? '/home' : '/lg/home')
                                    : handleOpenSnackbar
                              }>
                              <FiShoppingCart />
                           </Nav.Link>
                           <Nav.Link
                              className='navbar'
                              onClick={
                                 logged
                                    ? () =>
                                         navigate(
                                            logged
                                               ? '/perfil-usuario'
                                               : '/lg/home'
                                         )
                                    : handleOpenSnackbar
                              }>
                              <FaUserCircle />
                           </Nav.Link>
                           <Snackbar
                              open={isOpen}
                              autoHideDuration={3000}
                              onClose={handleCloseSnackbar}>
                              <Alert
                                 onClose={handleCloseSnackbar}
                                 severity='warning'
                                 sx={{ width: '100%' }}>
                                 {
                                    <>
                                       <span>Debes</span>
                                       <Boton
                                          style={{
                                             marginLeft: '10px',
                                             marginRight: '10px',
                                          }}
                                          onClick={() =>
                                             navigate(!logged && '/login')
                                          }>
                                          Iniciar Sesión <AiOutlineLogin />{' '}
                                       </Boton>
                                       <span>para poder usar esto</span>
                                    </>
                                 }
                              </Alert>
                           </Snackbar>
                        </Iconos>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      </>
   );
};

export default Nav1;
