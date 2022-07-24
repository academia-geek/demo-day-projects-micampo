import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAppDataAction } from '../../app/actions/userAppData.actions';

const GenderValidation = () => {
   const dispatch = useDispatch();
   const userAppData = useSelector(
      (state) => state.userAppData.userAppData.data
   );
   const [gender, setGender] = useState({ ...userAppData });
   const [value, setValue] = useState('');

   const handleChange = (e) => {
      setGender({ ...userAppData, [e.target.name]: e.target.value });
   };

   const handleClick = (e) => {
      setGender({ ...userAppData, [e.target.name]: e.target.value });
      setValue(e.target.value);
      dispatch(
         updateUserAppDataAction({
            ...userAppData,
            [e.target.name]: e.target.value,
         })
      );
   };

   return (
      <>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(updateUserAppDataAction(gender));
            }}>
            <input
               type='text'
               name='gender'
               placeholder='Selecciona tu genero'
               onChange={handleChange}
               value={value}
               disabled
            />
         </form>
         <div>
            <button
               type='button'
               name='gender'
               value='hombre'
               onClick={(e) => handleClick(e)}>
               Hombre
            </button>
            <button
               type='button'
               name='gender'
               value='mujer'
               onClick={(e) => handleClick(e)}>
               Mujer
            </button>
            <button
               type='button'
               name='gender'
               value='otro'
               onClick={(e) => handleClick(e)}>
               Otro
            </button>
         </div>
      </>
   );
};

export default GenderValidation;
