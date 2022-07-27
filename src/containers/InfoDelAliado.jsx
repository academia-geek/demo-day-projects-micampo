import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import UserMap from '../components/userMap';

const InfoDelAliado = () => {
   const [user, setUser] = useState(null);
   const isLoading = useSelector((state) => state.users.isLoading);
   const users = useSelector((state) => state.users.users);
   const { uid } = useParams();

   const getUser = async () => {
      const user = users.find((user) => user.data.uid === uid);
      setUser(user);
   };
   useEffect(() => {
      if (!isLoading) {
         getUser();
      }
   }, [users]);

   if (isLoading || !user) {
      return <LoadingScreen />;
   }

   return (
      <>
         {isLoading || !user ? (
            <LoadingScreen />
         ) : (
            <div>
              <div className='aliado-container'>
                 <div className='aliado-info'>
                    <Image
                       src={user.data.photoURL}
                       alt={user.data.name}
                       className='aliado-image'
                    />
                    <div>
                       <h1>{user.data.name}</h1>
                       <p>{user.data.type}</p>
                       <p>{user.data.ubication.textPosition}</p>
                    </div>
                 </div>
              </div>
              <div>
                  <h2>Ubicacion</h2>
                  <UserMap
                     lat={user.data.ubication.lat}
                     lng={user.data.ubication.lng}
                  />
               </div>
            </div>
         )}
      </>
   );
};

export default InfoDelAliado;
