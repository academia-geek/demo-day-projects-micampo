import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   getUserAction,
   updatePasswordAction,
   updateUserAction,
   updateEmailAction,
} from '../app/actions/user.actions';
import { logoutAction } from '../app/actions/login.actions';
import { Modal, Box, Avatar } from '@mui/material';
import ModalInfo from '../components/ModalInfo';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/User.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
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
   const [photo, setPhoto] = useState('');
   const [hasPhoto, setHasPhoto] = useState(false);

   const handleOpen = () => setIsEditingPhoto(true);
   const handleClose = () => setIsEditingPhoto(false);

   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);

   const userDataInitialState = [
      {
         type: '',
         user: '',
         gender: '',
         age: '',
         ubication: '',
      },
   ];

   const searchDocOrCreateDoc = async (userUID) => {
      const docRef = doc(db, 'usuarios', userUID);
      const consult = await getDoc(docRef);

      if (consult.exists()) {
         const infoDoc = consult.data();
         return infoDoc;
      } else {
         await setDoc(docRef, { data: [...userDataInitialState] });
         const consult = await getDoc(docRef);
         const infoDoc = consult.data();
         return infoDoc;
      }
   };

   const getData = async () => {
      return await searchDocOrCreateDoc(user.uid);
   };

   useEffect(() => {
      dispatch(getUserAction());
      if (user.photoURL) {
         setHasPhoto(true);
      }
   }, [isLoading]);

   useEffect(() => {
      if (user.isSuccess) {
         setIsLoading(false);
         console.log(user);
         setName(user.name);
         setEmail(user.email);
         setPhoto(user.photoURL);
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
                              className=''
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
               <div>
                  {isEditingName ? (
                     <div>
                        <input
                           className='mb-3 form-control'
                           type='text'
                           name='name'
                           placeholder='Name'
                           autoComplete='off'
                           onChange={(e) => setName(e.target.value)}
                        />
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingName(false);
                              dispatch(updateUserAction(user.data, name));
                           }}>
                           Save
                        </button>
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingName(false);
                              setName(user.name);
                           }}>
                           Cancel
                        </button>
                     </div>
                  ) : (
                     <div>
                        <span>Name: {user.name}</span>
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingName(true);
                           }}>
                           Edit
                        </button>
                     </div>
                  )}
               </div>
               <div>
                  {isEditingEmail ? (
                     <div>
                        <input
                           className='mb-3 form-control'
                           type='email'
                           name='email'
                           placeholder='Email address'
                           autoComplete='off'
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingEmail(false);
                              dispatch(updateEmailAction(user.data, email));
                           }}>
                           Save
                        </button>
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingEmail(false);
                              setEmail(user.email);
                           }}>
                           Cancel
                        </button>
                     </div>
                  ) : (
                     <div>
                        <span>Email: {user.email}</span>
                        <button
                           className=''
                           onClick={() => {
                              setIsEditingEmail(true);
                           }}>
                           Edit
                        </button>
                     </div>
                  )}
               </div>
               <div>
                  {isEditingPassword ? (
                     <div>
                        <input
                           type='password'
                           name='password'
                           placeholder='Password'
                           autoComplete='off'
                           onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                           onClick={() => {
                              setIsEditingPassword(false);
                              dispatch(
                                 updatePasswordAction(user.data, password)
                              );
                           }}>
                           Save
                        </button>
                        <button
                           onClick={() => {
                              setIsEditingPassword(false);
                              setPassword(user.password);
                           }}>
                           Cancel
                        </button>
                     </div>
                  ) : (
                     <div>
                        <span>Password: **********</span>
                        <button
                           onClick={() => {
                              setIsEditingPassword(true);
                           }}>
                           Edit
                        </button>
                     </div>
                  )}
               </div>
               <button
                  onClick={() => {
                     setIsEditing(false);
                  }}>
                  Cancelar
               </button>
               <button>Eliminar tu cuenta</button>
            </div>
         ) : (
            <div className='edit-components'>
               <h2 className='subtitle'>¿Que deseas hacer?</h2>
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
               <button className='delete-user-button'>
                  Eliminar tu cuenta
               </button>

               {/* <div>
                  <small><p>
                     SECCION NUEVA DONDE APARECERAN SELECCIONES DEL USUARIO,
                     DEPENDIENDO DE TIPO DE USUARIO (COMPRADOR,VENDEDOR DE
                     PRODUCTOS AGRICOLAS O VENDEDOR DE INSUMOS)
                  </p></small>
               </div> */}
            </div>
         )}
         </div>
      </div>
   );
};

export default User;
