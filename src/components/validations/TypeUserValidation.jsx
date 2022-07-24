import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAppDataAction } from '../../app/actions/userAppData.actions';

const TypeUserValidation = () => {
   const dispatch = useDispatch();
   const userAppData = useSelector(
      (state) => state.userAppData.userAppData.data
   );
   const [type, setType] = useState({ ...userAppData });
   const [value, setValue] = useState('');

   const handleChange = (e) => {
      setType({ ...userAppData, [e.target.name]: e.target.value });
   };

   const handleClick = (e) => {
      setType({ ...userAppData, [e.target.name]: e.target.value });
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
               name='type'
               onChange={handleChange}
               placeholder='Selecciona el tipo de usuario'
               value={value}
               disabled
            />
         </form>
         <div>
            <button
               type='button'
               name='type'
               value='agricultor'
               onClick={(e) => handleClick(e)}>
               Vendedor de productos agrícolas
            </button>
            <button
               type='button'
               name='type'
               value='comprador'
               onClick={(e) => handleClick(e)}>
               Comprador de productos agricolas
            </button>
            <button
               type='button'
               name='type'
               value='insumos'
               onClick={(e) => handleClick(e)}>
               Vendedor de insumos
            </button>
         </div>
      </>
   );
};

export default TypeUserValidation;
