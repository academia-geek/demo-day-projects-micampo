import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import SendMessages from './SendMessages';

const Chat = () => {
   const scroll = useRef();
   const [messages, setMessages] = useState([]);
   const auth = getAuth();

   const collectionData = async () => {
      const consult = await getDocs(collection(db, 'messages'));
      const messages = consult.docs.map((doc) => doc.data());
      const orderMessagesByServerTimestamp = messages
         .sort((a, b) => a.createdAt - b.createdAt)
      setMessages(orderMessagesByServerTimestamp);
   };

   useEffect(() => {
      collectionData();
   }, [messages]);

   return (
      <div>
         <div className='msgs'>
            {messages.map(({ id, text, photoURL, uid }) => (
               <div key={id}>
                  <div
                     className={`msg ${
                        uid === auth.currentUser.uid ? 'sent' : 'received'
                     }`}>
                     <img src={photoURL} alt='' />
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

export default Chat;
