import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import LoadingScreen from './LoadingScreen';

const MapView = () => {
   const [actualPositionOrMove, setActualPositionOrMove] = useState(true);
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
            flexDirection: 'column',
         }}>
         {actualPositionOrMove ? (
            <>
               <h1>¿Quieres guardar tu ubicacion actual?</h1>
                <button onClick={() => setActualPositionOrMove(false)}>
                    Cambiar ubicacion
                </button>
                <button onClick={() => setActualPositionOrMove(false)}>
                    Guardar esta ubicacion
                </button>
               {lat !== 0 && lng !== 0 ? (
                  <MapContainer
                     center={[lat, lng]}
                     zoom={17}
                     scrollWheelZoom={true}
                     style={{ width: '50vw', height: '50vh' }}>
                     <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                     />
                     <Marker position={[lat, lng]}>
                        <Popup position={[lat, lng]}>
                           <span>
                              <strong>Tu ubicación actual</strong>
                           </span>
                        </Popup>
                     </Marker>
                  </MapContainer>
               ) : (
                  <LoadingScreen />
               )}
            </>
         ) : (
            <>
                <h1>¿Quieres guardar esta ubicacion <br /> como tu ubicacion por defecto?</h1>
                <button onClick={() => setActualPositionOrMove(true)}>
                    Cambiar a ubicacion actual
                </button>
                <button onClick={() => setActualPositionOrMove(false)}>
                    Guardar esta ubicacion
                </button>
                <MapContainer
                   center={[lat, lng]}
                   zoom={17}
                   scrollWheelZoom={true}
                   style={{ width: '50vw', height: '50vh' }}>
                   <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                   />
                   <Marker
                      position={[lat, lng]}
                      draggable={true}
                      //   onDragend={eventHandlers.dragend}
                      //   ref={markerRef}
                   >
                      <Popup position={[lat, lng]}>
                         <span>
                            <strong style={{
                                 fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    color: '#000',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '1rem',
                                    marginTop: '1rem',
                                    
                            }}>Arrastrame</strong>
                         </span>
                      </Popup>
                   </Marker>
                </MapContainer>
            </>
         )}
      </div>
   );
};

export default MapView;
