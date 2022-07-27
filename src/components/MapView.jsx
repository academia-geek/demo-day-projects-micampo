import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import LoadingScreen from "./LoadingScreen";

const MapView = () => {
  const [actualPositionOrMove, setActualPositionOrMove] = useState(true);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [position, setPosition] = useState(null);
  const markerRef = useRef(null);
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
  };

  const dragend = () => {
    const marker = markerRef.current;
    if (marker != null) {
      setPosition(marker.getLatLng());
      setLat(marker.getLatLng().lat);
      setLng(marker.getLatLng().lng);
    }
  };

  useEffect(() => {
    getActualPosition();
  }, []);
  useEffect(() => {
    getActualPosition();
  }, [actualPositionOrMove]);

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>¿Que quieres hacer?</h1>
      {actualPositionOrMove ? (
        <>
          <button onClick={() => console.log(`lat: ${lat} - lng: ${lng}`)}>
            Guardar mi ubicación actual
          </button>
          <button onClick={() => setActualPositionOrMove(false)}>
            Cambiar a otra ubicación
          </button>
          {lat !== 0 && lng !== 0 ? (
            <MapContainer
              center={[lat, lng]}
              zoom={17}
              scrollWheelZoom={false}
              dragging={false}
              style={{ width: "50vw", height: "50vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
          <button onClick={() => setActualPositionOrMove(true)}>
            Cambiar a mi ubicación actual
          </button>
          <button onClick={() => console.log(`lat: ${lat} - lng: ${lng}`)}>
            Guardar esta ubicacion
          </button>

          <strong>Arrastra el marcador para cambiar la ubicación</strong>
          {lat !== 0 && lng !== 0 ? (
            <MapContainer
              center={position}
              zoom={17}
              scrollWheelZoom={true}
              style={{ width: "50vw", height: "50vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={position}
                draggable={true}
                eventHandlers={{
                  dragend: dragend,
                }}
                dragend={dragend}
                ref={markerRef}
              >
                <Popup>
                  <span>
                    <strong
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        color: "#000",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                      }}
                    >
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
    </div>
  );
};

export default MapView;
