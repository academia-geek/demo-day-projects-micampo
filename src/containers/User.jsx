import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   getUserAction,
   updatePasswordAction,
   updateUserAction,
   updateEmailAction,
   deleteUserAction,
} from '../app/actions/user.actions';
import { logoutAction } from '../app/actions/login.actions';
import { Modal, Box, Avatar } from '@mui/material';
import ModalInfo from '../components/ModalInfo';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/User.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';

const style = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: '#1D1D1D',
   height: 500,
   borderRadius: 10,
   padding: 5,
   textAlign: 'center',
   color: '#fff',
};

const User = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [isEditing, setIsEditing] = useState(false);
   const [isEditingName, setIsEditingName] = useState(false);
   const [isEditingEmail, setIsEditingEmail] = useState(false);
   const [isEditingPassword, setIsEditingPassword] = useState(false);
   const [isEditingPhoto, setIsEditingPhoto] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [photo, setPhoto] = useState();
   const [providerId, setProviderId] = useState('');
   const [hasPhoto, setHasPhoto] = useState(false);
   const [isDeletingUser, setIsDeletingUser] = useState(false);
   const navigate = useNavigate();
   const handleOpen = () => setIsEditingPhoto(true);
   const handleClose = () => setIsEditingPhoto(false);

   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);

   useEffect(() => {
      if (user.photoURL) {
         setHasPhoto(true);
      }
   }, [isLoading]);

   useEffect(() => {
      if (user.isSuccess) {
         setIsLoading(false);
         setName(user.name);
         setEmail(user.email);
         setPhoto(user.photoURL);
         setProviderId(user.data.providerData[0].providerId);
         console.log(user.data.providerData[0].providerId);
      } else {
         setIsLoading(true);
      }
   }, [user]);

   if (user.isLoading || isLoading) {
      return <LoadingScreen />;
   }

   return (
      <div className='user-main-container'>
         <div className='header-section'>
            <h1 className='user-name'>Hola {user.name}</h1>
            <div className='photo-section'>
               {isEditingPhoto && (
                  <div>
                     <Modal
                        open={isEditingPhoto}
                        onClose={handleClose}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'>
                        <Box sx={style}>
                           <ModalInfo user={user.data} />
                           <button
                              className='cancel-button'
                              onClick={() => {
                                 setIsEditingPhoto(false);
                                 setPhoto(user.photoURL);
                              }}>
                              Cancel
                           </button>
                        </Box>
                     </Modal>
                  </div>
               )}
               <div>
                  <div className='profile-photo'>
                     {hasPhoto ? (
                        <Avatar
                           alt={user.name}
                           sx={{ width: '100%', height: '100%' }}
                           src={user.photoURL}
                        />
                     ) : (
                        <Avatar
                           alt={user.name}
                           sx={{ width: '100%', height: '100%' }}
                           src='https://res.cloudinary.com/gartners/image/upload/v1658122846/DemoDay/146-1468843_profile-icon-orange-png-transparent-png_qsx0un.png'
                        />
                     )}
                     <button
                        className='edit-photo-button'
                        onClick={() => {
                           handleOpen();
                        }}>
                        <div className='hidden-animation'>
                           <BorderColorIcon />
                        </div>
                     </button>
                  </div>
               </div>
            </div>

            {isEditing ? (
               <div className='edit-components'>
                  <h2 className='subtitle'>Editar perfil</h2>
                  <>
                     {isEditingName ? (
                        <div className='edit-complete-field'>
                           <input
                              className='input-edit-user'
                              type='text'
                              name='name'
                              placeholder='Nuevo nombre'
                              autoComplete='off'
                              onChange={(e) => setName(e.target.value)}
                           />
                           <button
                              className='save-user-button'
                              onClick={() => {
                                 setIsEditingName(false);
                                 dispatch(updateUserAction(user.data, name));
                              }}>
                              Save
                           </button>
                           <button
                              className='cancel-user-button'
                              onClick={() => {
                                 setIsEditingName(false);
                                 setName(user.name);
                              }}>
                              Cancel
                           </button>
                        </div>
                     ) : (
                        <div className='edit-complete-field'>
                           <span className='edit-user-span'>
                              Name: {user.name}
                           </span>
                           <button
                              className='open-edit-user-button'
                              onClick={() => {
                                 setIsEditingName(true);
                              }}>
                              Edit
                           </button>
                        </div>
                     )}
                  </>
                  {providerId === 'google.com' || providerId === 'facebook.com' ? null : (
                     <>
                        <>
                           {isEditingEmail ? (
                              <div className='edit-complete-field'>
                                 <input
                                    className='input-edit-user'
                                    type='email'
                                    name='email'
                                    placeholder='Nuevo email'
                                    autoComplete='off'
                                    onChange={(e) => setEmail(e.target.value)}
                                 />
                                 <button
                                    className='save-user-button'
                                    onClick={() => {
                                       setIsEditingEmail(false);
                                       dispatch(
                                          updateEmailAction(user.data, email)
                                       );
                                    }}>
                                    Save
                                 </button>
                                 <button
                                    className='cancel-user-button'
                                    onClick={() => {
                                       setIsEditingEmail(false);
                                       setEmail(user.email);
                                    }}>
                                    Cancel
                                 </button>
                              </div>
                           ) : (
                              <div className='edit-complete-field'>
                                 <span className='edit-user-span'>
                                    Email: {user.email}
                                 </span>
                                 <button
                                    className='open-edit-user-button'
                                    onClick={() => {
                                       setIsEditingEmail(true);
                                    }}>
                                    Edit
                                 </button>
                              </div>
                           )}
                        </>
                        <>
                           {isEditingPassword ? (
                              <div className='edit-complete-field'>
                                 <input
                                    className='input-edit-user'
                                    type='password'
                                    name='password'
                                    placeholder='Nueva contraseña'
                                    autoComplete='off'
                                    onChange={(e) =>
                                       setPassword(e.target.value)
                                    }
                                 />
                                 <button
                                    className='save-user-button'
                                    onClick={() => {
                                       setIsEditingPassword(false);
                                       dispatch(
                                          updatePasswordAction(
                                             user.data,
                                             password
                                          )
                                       );
                                    }}>
                                    Save
                                 </button>
                                 <button
                                    className='cancel-user-button'
                                    onClick={() => {
                                       setIsEditingPassword(false);
                                       setPassword(user.password);
                                    }}>
                                    Cancel
                                 </button>
                              </div>
                           ) : (
                              <div className='edit-complete-field'>
                                 <span className='edit-user-span'>
                                    Password: **********
                                 </span>
                                 <button
                                    className='open-edit-user-button'
                                    onClick={() => {
                                       setIsEditingPassword(true);
                                    }}>
                                    Edit
                                 </button>
                              </div>
                           )}
                        </>
                     </>
                  )}
                  <button
                     className='cancel-button'
                     onClick={() => {
                        setIsEditing(false);
                     }}>
                     Cancelar
                  </button>
                  <button className='delete-user-button'>
                     Eliminar tu cuenta
                  </button>
               </div>
            ) : (
               <div className='edit-components'>
                  <h2 className='subtitle'>¿Que deseas hacer?</h2>
                  <button
                     className='edit-user-button'
                     onClick={() => {
                        navigate('/add');
                     }}>
                     Añadir un producto
                  </button>
                  <button
                     className='edit-user-button'
                     onClick={() => {
                        navigate('/map');
                     }}>
                     Añadir tu ubicación
                  </button>
                  <button
                     className='edit-user-button'
                     onClick={() => {
                        setIsEditing(true);
                     }}>
                     Editar Cuenta
                  </button>
                  <button
                     className='close-sesion-button'
                     onClick={() => {
                        dispatch(logoutAction());
                     }}>
                     Cerrar sesión
                  </button>
                  <button
                     className='delete-user-button'
                     onClick={() => setIsDeletingUser(true)}>
                     Eliminar tu cuenta
                  </button>
                  {isDeletingUser && (
                     <>
                        <Modal
                           open={isDeletingUser}
                           onClose={() => isDeletingUser(false)}
                           aria-labelledby='modal-modal-title'
                           aria-describedby='modal-modal-description'>
                           <Box sx={style}>
                              <h2 className='subtitle'>¿Estas seguro?</h2>
                              <p className='delete-user-modal-text'>
                                 Esta acción no se puede deshacer.
                              </p>
                              <button
                                 className='delete-user-button'
                                 onClick={() => {
                                    dispatch(deleteUserAction());
                                    setIsDeletingUser(false);
                                 }}>
                                 Eliminar
                              </button>
                              <button
                                 className='cancel-button'
                                 onClick={() => {
                                    setIsDeletingUser(false);
                                 }}>
                                 Cancelar
                              </button>
                           </Box>
                        </Modal>
                     </>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};

export default User;
