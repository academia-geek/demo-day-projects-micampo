import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserAppDataAction } from '../../app/actions/userAppData.actions';
import LoadingScreen from '../../components/LoadingScreen';
import { db } from '../../firebase/firebaseConfig';
import ValidateUbication from './ValidateUbication';

const Validations = () => {
   const [ageOpen, setAgeOpen] = useState(true);
   const [GenderOpen, setGenderOpen] = useState(false);
   const [TypeUserOpen, setTypeUserOpen] = useState(false);
   const [ubicationOpen, setUbicationOpen] = useState(false);
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
            setAgeOpen(false);
            setGenderOpen(true);
            break;
         case GenderOpen:
            setGenderOpen(false);
            setTypeUserOpen(true);
            break;
         case TypeUserOpen:
            setTypeUserOpen(false);
            setUbicationOpen(true);
            break;
         case ubicationOpen:
            setUbicationOpen(true);
         default:
            break;
      }
   };

   const handleBack = () => {
      switch (true) {
         case ageOpen:
            setAgeOpen(true);
            setGenderOpen(false);
            break;
         case GenderOpen:
            setGenderOpen(false);
            setAgeOpen(true);
            break;
         case TypeUserOpen:
            setTypeUserOpen(false);
            setGenderOpen(true);
            break;
         case ubicationOpen:
            setUbicationOpen(false);
            setTypeUserOpen(true);
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
      const docRef = doc(db, 'usuarios', user.uid);
      updateDoc(docRef, {
         data: {
            ...newData,
         },
      });
      dispatch(updateUserAppDataAction(newData));
      navigate('/home');
   };

   if (
      userAppData.isLoading ||
      userAppData.data.length === 0 ||
      user.isLoading
   ) {
      return <LoadingScreen />;
   }

   return (
      <>
         <h2>Ayudanos verificando estos datos acerca de ti</h2>
         {ageOpen && (
            <>
               <input
                  type='number'
                  placeholder='14'
                  min={14}
                  name='age'
                  onChange={handleChange}
                  required
               />
            </>
         )}
         {GenderOpen && (
            <>
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
               <input
                  type='text'
                  name='type'
                  onChange={handleChange}
                  placeholder='Selecciona el tipo de usuario'
                  value={typeValue}
                  disabled
               />
               <div>
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
         {/* {ubicationOpen && <ValidateUbication />} */}
         <button onClick={handleBack}>Atrás</button>
         <button onClick={handleNext}>Siguiente</button>

         <button onClick={() => handleSend()}>Confirmar</button>
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
      </>
   );
};

export default Validations;
