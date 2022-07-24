import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setUserAppDataAction } from '../../app/actions/userAppData.actions';
import AgeValidation from '../../components/validations/AgeValidation';
import GenderValidation from '../../components/validations/GenderValidation';
import TypeUserValidation from '../../components/validations/TypeUserValidation';
import UbicationValidation from '../../components/validations/UbicationValidation';

const Validations = () => {
   const [ageOpen, setAgeOpen] = useState(true);
   const [GenderOpen, setGenderOpen] = useState(false);
   const [TypeUserOpen, setTypeUserOpen] = useState(false);
   const [UbicationOpen, setUbicationOpen] = useState(false);
   const [finished, setFinished] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const userAppDataInitialState = useSelector((state) => state.userAppData);

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
         case UbicationOpen:
            setUbicationOpen(false);
            break;
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
         case UbicationOpen:
            setUbicationOpen(false);
            setTypeUserOpen(true);
            break;
         default:
            break;
      }
   };
   return (
      <>
         <h2>Ayudanos verificando estos datos acerca de ti</h2>
         {ageOpen && <AgeValidation />}
         {GenderOpen && <GenderValidation />}
         {TypeUserOpen && <TypeUserValidation />}
         {UbicationOpen && <UbicationValidation />}
         <button onClick={handleBack}>Atrás</button>
         <button onClick={handleNext}>Siguiente</button>
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
