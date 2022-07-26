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
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const GlobalChat = () => {
   const [chatOpen, setChatOpen] = useState(false);
   const [messages, setMessages] = useState([]);
   const [msg, setMsg] = useState('');
   const scroll = useRef();
   const auth = getAuth();
   const user = useSelector((state) => state.user);

   const handleChatOpen = () => {
      setChatOpen(true);
   };

   const handleChatClose = () => {
      setChatOpen(false);
   };

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
   }, []);

   return (
      <>
         {chatOpen ? (
            <div className='chat-container'>
               <button
                  className='chat-close-button'
                  onClick={handleChatClose}
               >
                  <CloseIcon />
               </button>
               <div className='msgs'>
                  {messages.map(
                     ({ id, text, photoURL, uid, createdAt, name }) => (
                        <div key={id}>
                           <div
                              className={`msg ${
                                 uid === auth.currentUser.uid
                                    ? 'sent'
                                    : 'received'
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
                                             {createdAt
                                                .toDate()
                                                .toLocaleTimeString()}
                                          </span>
                                       )}
                                    </small>
                                 </div>
                              </div>
                              <p>{text}</p>
                           </div>
                        </div>
                     )
                  )}
               </div>
               <div className='sendMsg-container'>
                  <form onSubmit={(e)=> sendMessage(e)}>
                     <div className='sendMsg'>
                        <input
                           placeholder='Mensaje'
                           type='text'
                           value={msg}
                           onChange={(e) => setMsg(e.target.value)}
                        />
                        <button
                           className='send-message-button'
                           type='submit'>
                           <SendIcon />
                        </button>
                     </div>
                  </form>
               </div>
               <div ref={scroll}></div>
            </div>
         ) : (
            <button className='chat-button' onClick={handleChatOpen}>
               <ChatIcon />
            </button>
         )}
      </>
   );
};

export default GlobalChat;
