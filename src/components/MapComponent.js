import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ stations, path }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={16} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng]}>
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
      {path.length > 0 && <Polyline positions={path} color="blue" />}
    </MapContainer>
  );
};

export default MapComponent;

