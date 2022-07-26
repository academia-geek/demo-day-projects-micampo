import {
   addDoc,
   collection,
   getDocs,
   serverTimestamp,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebaseConfig';

const SendMessages = ({ scroll }) => {
   

   return (
      <div>
         <form onSubmit={sendMessage}>
            <div className='sendMsg'>
               <input
                  placeholder='Mensaje'
                  type='text'
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
               />
               <button
                  style={{
                     width: '18%',
                     fontSize: '15px',
                     fontWeight: '550',
                     margin: '4px 5% -13px 5%',
                     maxWidth: '200px',
                  }}
                  type='submit'>
                  Enviar
               </button>
            </div>
         </form>
      </div>
   );
};

export default SendMessages;
