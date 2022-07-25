import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapView = () => {
   return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width: '80vw', height: '80vh'}}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
         />
      </MapContainer>
   );
};

export default MapView;
