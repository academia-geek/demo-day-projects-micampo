import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAppDataAction } from '../../app/actions/userAppData.actions';

const AgeValidation = () => {
   const dispatch = useDispatch();
   const userAppData = useSelector((state) => state.userAppData.userAppData.data);
   const [age, setAge] = useState({...userAppData});

   const handleChange = (e) => {
      setAge({...userAppData, [e.target.name]: e.target.value});
   };

   return (
      <>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(updateUserAppDataAction(age));
            }}>
            <input
               type='number'
               placeholder='14'
               min={14}
               name='age'
               onChange={handleChange}
               required
            />
            <button type='Submit'>Confirmar</button>
         </form>
      </>
   );
};

export default AgeValidation;
