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
import { Productos } from '../../styles/Home';
import { TbMessages } from 'react-icons/tb';

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
            <div className='animate__animated animate__backInUp animate__fadeInUp chat-container'>
               <button className='chat-close-button' onClick={handleChatClose}>
                  <CloseIcon />
               </button>
               <div className='msgs'>
                  {messages.map(
                     ({ id, text, photoURL, uid, createdAt, name, display }) => (
                        <div key={id} style={{display: display}}>
                           <div
                              className={`msg ${
                                 uid === auth.currentUser.uid
                                    ? 'sent'
                                    : 'received'
                              }`}>
                              <div className='message-info-container'>
                                 <img className='chat-user-image' width={50} src={photoURL} alt='' />
                                 <div>
                                    <small
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                       }}>
                                       <span className='chat-name'>{name}</span>
                                       {createdAt && (
                                          <span className='chat-time'>
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
                  <form onSubmit={(e) => sendMessage(e)}>
                     <div className='sendMsg'>
                        <input
                           placeholder='Mensaje'
                           type='text'
                           value={msg}
                           onChange={(e) => setMsg(e.target.value)}
                        />
                        <Productos className='send-message-button' type='submit'>
                           <SendIcon />
                        </Productos>
                     </div>
                  </form>
               </div>
               <div ref={scroll}></div>
            </div>
         ) : (
            <Productos
               className='animate__animated animate__infinite infinite animate__tada animate__slow chat-button'
               onClick={handleChatOpen}>
               <TbMessages />
            </Productos>
         )}
      </>
   );
};

export default GlobalChat;
