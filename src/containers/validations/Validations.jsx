import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserAppDataAction } from '../../app/actions/userAppData.actions';
import LoadingScreen from '../../components/LoadingScreen';
import MapView from '../../components/MapView';
import { db } from '../../firebase/firebaseConfig';

const Validations = () => {
   const [ageOpen, setAgeOpen] = useState(true);
   const [GenderOpen, setGenderOpen] = useState(false);
   const [TypeUserOpen, setTypeUserOpen] = useState(false);
   const [ubicationOpen, setUbicationOpen] = useState(false);
   const [buttonLeft, setButtonLeft] = useState(false);
   const [buttonRight, setButtonRight] = useState(true);
   const [confirmButton, setConfirmButton] = useState(false);
   const [finished, setFinished] = useState(false);
   const user = useSelector((state) => state.user);
   const [newData, setNewData] = useState({
      age: '',
      gender: '',
      type: '',
      ubication: '',
      uid: user.uid,
      name: user.name,
      photoURL: user.photoURL,
   });
   const [genderValue, setGenderValue] = useState('');
   const [typeValue, setTypeValue] = useState('');
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const userAppData = useSelector((state) => state.userAppData);

   const handleNext = () => {
      switch (true) {
         case ageOpen:
            setButtonLeft(true);
            setButtonRight(true);
            setAgeOpen(false);
            setGenderOpen(true);
            break;
         case GenderOpen:
            setButtonLeft(true);
            setButtonRight(true);
            setGenderOpen(false);
            setTypeUserOpen(true);
            break;
         case TypeUserOpen:
            setButtonLeft(true);
            setButtonRight(false);
            setTypeUserOpen(false);
            setUbicationOpen(true);
            setConfirmButton(false);
            break;
         case ubicationOpen:
            setButtonLeft(true);
            setButtonRight(false);
            setUbicationOpen(true);
            setConfirmButton(true);
         default:
            break;
      }
   };

   const handleBack = () => {
      switch (true) {
         case ageOpen:
            setButtonLeft(false);
            setButtonRight(true);
            setAgeOpen(true);
            setGenderOpen(false);
            break;
         case GenderOpen:
            setButtonLeft(false);
            setButtonRight(true);
            setGenderOpen(false);
            setAgeOpen(true);
            break;
         case TypeUserOpen:
            setButtonLeft(true);
            setButtonRight(true);
            setTypeUserOpen(false);
            setGenderOpen(true);
            break;
         case ubicationOpen:
            setButtonLeft(true);
            setButtonRight(false);
            setUbicationOpen(false);
            setTypeUserOpen(true);
            setConfirmButton(true);
         default:
            break;
      }
   };

   const handleChange = (e) => {
      setNewData({ ...newData, [e.target.name]: e.target.value });
   };

   const handleClickGender = (e) => {
      setNewData({ ...newData, [e.target.name]: e.target.value });
      setGenderValue(e.target.value);
   };

   const handleClickTypeUser = (e) => {
      setNewData({ ...newData, [e.target.name]: e.target.value });
      setTypeValue(e.target.value);
   };

   const handleSend = () => {
      // UPDATEFIREBASEDATA
      // const docRef = doc(db, 'usuarios', user.uid);
      // updateDoc(docRef, {
      //    data: {
      //       ...newData,
      //    },
      // });
      dispatch(updateUserAppDataAction(newData));
      setConfirmButton(true);
   };

   if (
      userAppData.isLoading ||
      userAppData.data.length === 0 ||
      user.isLoading
   ) {
      return <LoadingScreen />;
   }

   return (
      <div className='validations-box'>
         <h1>Ayudanos verificando estos datos acerca de ti</h1>
         {ageOpen && (
            <>
               <h2>Ingresa tu edad:</h2>
               <input
                  type='number'
                  placeholder='ej .14'
                  min={14}
                  name='age'
                  onChange={handleChange}
                  required
               />
            </>
         )}
         {GenderOpen && (
            <>
               <h2>Selecciona tu género:</h2>
               <input
                  type='text'
                  name='gender'
                  placeholder='Selecciona tu genero'
                  value={genderValue}
                  disabled
               />
               <div>
                  <button
                     type='button'
                     name='gender'
                     value='hombre'
                     onClick={(e) => handleClickGender(e)}>
                     Hombre
                  </button>
                  <button
                     type='button'
                     name='gender'
                     value='mujer'
                     onClick={(e) => handleClickGender(e)}>
                     Mujer
                  </button>
                  <button
                     type='button'
                     name='gender'
                     value='otro'
                     onClick={(e) => handleClickGender(e)}>
                     Otro
                  </button>
               </div>
            </>
         )}
         {TypeUserOpen && (
            <>
               <h2>Selecciona tu tipo de usuario:</h2>
               <input
                  type='text'
                  name='type'
                  onChange={handleChange}
                  placeholder='Selecciona el tipo de usuario'
                  value={typeValue}
                  disabled
               />
               <div className='type-user-buttons'>
                  <button
                     type='button'
                     name='type'
                     value='agricultor'
                     onClick={(e) => handleClickTypeUser(e)}>
                     Vendedor de productos agrícolas
                  </button>
                  <button
                     type='button'
                     name='type'
                     value='comprador'
                     onClick={(e) => handleClickTypeUser(e)}>
                     Comprador de productos agricolas
                  </button>
                  <button
                     type='button'
                     name='type'
                     value='insumos'
                     onClick={(e) => handleClickTypeUser(e)}>
                     Vendedor de insumos
                  </button>
               </div>
            </>
         )}
         {ubicationOpen && (
            <>
               <h2>Selecciona tu ubicacion</h2>
               <MapView newData={newData} setNewData={setNewData} />
            </>
         )}
         <div className='validation-buttons'>
            {buttonLeft && <button onClick={handleBack}>Atrás</button>}
            {buttonRight && <button onClick={handleNext}>Confirmar</button>}
            {confirmButton && (
               <button onClick={() => handleSend()}>Confirmar</button>
            )}
         </div>

         {finished && (
            <div>
               <h2>Gracias por completar tu registro</h2>
               <p>
                  Ya puedes apovechar a nuestros usuarios y disfrutar de todos
                  los beneficios que te ofrecemos.
               </p>
               <button
                  onClick={() => {
                     navigate('/home');
                  }}>
                  Ir a la página principal
               </button>
            </div>
         )}
      </div>
   );
};

export default Validations;
