import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const userMap = (position) => {
   return (
      <>
         <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
            dragging={false}
            style={{ width: '50vw', height: '50vh' }}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
               <Popup position={position}>
                  <span>
                     <strong>Ubicacion actual</strong>
                  </span>
               </Popup>
            </Marker>
         </MapContainer>
      </>
   );
};

export default userMap;
