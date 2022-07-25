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
   const [msg, setMsg] = useState('');
   const user = useSelector((state) => state.user);

   const sendMessage = async (e) => {
      e.preventDefault();
      const docRef = await getDocs(collection(db, 'messages'));
      const id = docRef.docs.length + 1;

      const photoURL = user.photoURL
         ? user.photoURL
         : 'https://res.cloudinary.com/gartners/image/upload/v1658122846/DemoDay/146-1468843_profile-icon-orange-png-transparent-png_qsx0un.png';

      await addDoc(collection(db, 'messages'), {
         id,
         text: msg,
         photoURL,
         uid: user.uid,
         name: user.name,
         createdAt: serverTimestamp(),
      });
      setMsg('');
      scroll.current.scrollIntoView({ behavior: 'smooth' });
   };

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
