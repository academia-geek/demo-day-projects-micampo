import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import SendMessages from './SendMessages';

const GlobalChat = () => {
   const scroll = useRef();
   const [messages, setMessages] = useState([]);
   const auth = getAuth();

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
   }, []);

   return (
      <div>
         <div></div>
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
         <SendMessages scroll={scroll} />
         <div ref={scroll}></div>
      </div>
   );
};

export default GlobalChat;
