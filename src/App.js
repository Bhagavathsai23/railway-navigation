import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import SearchComponent from "./components/SearchComponent";
import StationCard from "./components/StationCard";
import stations from "./data/stations";

export default function App() {
  const [destination, setDestination] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);
  const [path, setPath] = useState([]);

  const handleSearch = () => {
    const found = stations.find((s) =>
      s.name.toLowerCase().includes(destination.toLowerCase())
    );
    setSelectedStation(found);
    if (found) {
      calculatePath(found);
    }
  };

  const calculatePath = (destinationStation) => {
    const pathSequence = stations.slice(0, stations.indexOf(destinationStation) + 1);
    setPath(pathSequence.map(station => [station.lat, station.lng]));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Railway Station Navigation</h1>
      <SearchComponent destination={destination} setDestination={setDestination} handleSearch={handleSearch} />
      <MapComponent stations={stations} path={path} />
      <StationCard selectedStation={selectedStation} />
    </div>
  );
}
