import { getAuth } from 'firebase/auth';
import {
   addDoc,
   collection,
   getDocs,
   serverTimestamp,
} from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebaseConfig';
import SendMessages from './SendMessages';

const GlobalChat = () => {
   const scroll = useRef();
   const [messages, setMessages] = useState([]);
   const [msg, setMsg] = useState('');
   const auth = getAuth();
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

   const collectionData = async () => {
      const consult = await getDocs(collection(db, 'messages'));
      const messages = consult.docs.map((doc) => doc.data());
      const orderMessagesByServerTimestamp = messages.sort(
         (a, b) => a.createdAt - b.createdAt
      );
      setMessages(orderMessagesByServerTimestamp);
   };

   useEffect(() => {
      collectionData();
   }, [sendMessage]);

   return (
      <div>
         <div className='msgs'>
            {messages.map(({ id, text, photoURL, uid, createdAt, name }) => (
               <div key={id}>
                  <div
                     className={`msg ${
                        uid === auth.currentUser.uid ? 'sent' : 'received'
                     }`}>
                     <div style={{ display: 'flex' }}>
                        <img width={50} src={photoURL} alt='' />
                        <div>
                           <small
                              style={{
                                 display: 'flex',
                                 flexDirection: 'column',
                              }}>
                              <span>{name}</span>
                              {createdAt && (
                                 <span>
                                    {createdAt.toDate().toLocaleTimeString()}
                                 </span>
                              )}
                           </small>
                        </div>
                     </div>
                     <p>{text}</p>
                  </div>
               </div>
            ))}
         </div>

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
         <div ref={scroll}></div>
      </div>
   );
};

export default GlobalChat;
