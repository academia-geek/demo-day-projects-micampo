import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAppDataAction } from '../app/actions/userAppData.actions';
import { db } from '../firebase/firebaseConfig';
import LoadingScreen from './LoadingScreen';
import { useNavigate } from 'react-router-dom';

const MapView = ({ newData }) => {
   const [actualPositionOrMove, setActualPositionOrMove] = useState(true);
   const [lat, setLat] = useState(0);
   const [lng, setLng] = useState(0);
   const [textPosition, setTextPosition] = useState('');
   const [position, setPosition] = useState(null);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const markerRef = useRef(null);
   const navigate = useNavigate();

   const latitudeAndLongitudeToAddress = async (lat, lng) => {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/pereira.json?proximity=${lat}%2C${lng}&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiZ2FydG5lcjI0IiwiYSI6ImNsNjM5NGcycjBtaWMzY3BmOGlvOGppZWUifQ.VyVP-P-Gny2TtaakGLVtGw`;
      const response = await fetch(url);
      const data = await response.json();
      const address = data.features[0].place_name;
      setTextPosition(address);
   };

   const getActualPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const { latitude, longitude } = position.coords;
         setPosition({
            lat: latitude,
            lng: longitude,
         });
         setLat(latitude);
         setLng(longitude);
      });
      setLat(latitude);
      setLng(longitude);
    }
  ;

   const dragend = () => {
      const marker = markerRef.current;
      if (marker != null) {
         setPosition(marker.getLatLng());
         setLat(marker.getLatLng().lat);
         setLng(marker.getLatLng().lng);
      }
   };

   const handleSend = () => {
      const docRef = doc(db, 'usuarios', user.uid);
      latitudeAndLongitudeToAddress(lat, lng);
      updateDoc(docRef, {
         data: {
            ...newData,
            ubication: { textPosition, lat, lng },
         },
      });
      dispatch(
         updateUserAppDataAction({
            ...newData,
            ubication: { textPosition, lat, lng },
         })
      );
      navigate('/home');
   };

   useEffect(() => {
      getActualPosition();
   }, []);
   useEffect(() => {
      getActualPosition();
   }, [actualPositionOrMove]);
   useEffect(() => {
      latitudeAndLongitudeToAddress(lat, lng);
   }, [position, lat, lng]);

   return (
      <div
         style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}>
         {actualPositionOrMove ? (
            <>
               <div className='map-buttons'>
                  <button
                     className='change-map-button'
                     onClick={() => setActualPositionOrMove(false)}>
                     Cambiar a otra ubicación
                  </button>
               </div>
               {lat !== 0 && lng !== 0 ? (
                  <MapContainer
                     center={[lat, lng]}
                     zoom={17}
                     scrollWheelZoom={false}
                     dragging={false}
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
               <div className='map-buttons'>
                  <button
                     className='change-map-button'
                     onClick={() => {
                        setActualPositionOrMove(true);
                        getActualPosition();
                     }}>
                     Cambiar a mi ubicación actual
                  </button>
               </div>
               <p
                  style={{
                     color: 'red',
                  }}>
                  <strong>
                     Arrastra el marcador para cambiar la ubicación
                  </strong>
               </p>
               {lat !== 0 && lng !== 0 ? (
                  <MapContainer
                     center={position}
                     zoom={17}
                     scrollWheelZoom={true}
                     style={{ width: '50vw', height: '50vh' }}>
                     <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                     />
                     <Marker
                        position={position}
                        draggable={true}
                        eventHandlers={{
                           dragend: dragend,
                        }}
                        dragend={dragend}
                        ref={markerRef}>
                        <Popup>
                           <span>
                              <strong
                                 style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    color: '#000',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '1rem',
                                    marginTop: '1rem',
                                 }}>
                                 Arrastrame
                              </strong>
                           </span>
                        </Popup>
                     </Marker>
                  </MapContainer>
               ) : (
                  <LoadingScreen />
               )}
            </>
         )}
         <div className='validation-buttons'>
            <button onClick={() => handleSend()}>Confirmar</button>
         </div>
      </div>
   );
};

export default MapView;
