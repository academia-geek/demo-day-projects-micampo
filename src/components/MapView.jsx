import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import LoadingScreen from './LoadingScreen';

const MapView = () => {
   const [lat, setLat] = useState(0);
   const [lng, setLng] = useState(0);
   const getActualPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const { latitude, longitude } = position.coords;
         setLat(latitude);
         setLng(longitude);
      });
   };

   useEffect(() => {
      getActualPosition();
   }, []);
   return (
      <div
         style={{
            width: '100vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
         {lat === 0 ? (
            <LoadingScreen />
         ) : (
            <MapContainer
               center={[lat, lng]}
               zoom={13}
               scrollWheelZoom={false}
               style={{ width: '50vw', height: '50vh' }}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
               />
               <Marker position={[lat, lng]}>
                  <Popup>Tu ubicacion</Popup>
               </Marker>
            </MapContainer>
         )}
      </div>
   );
};

export default MapView;
