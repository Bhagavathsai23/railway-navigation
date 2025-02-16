import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Speaker } from "lucide-react";
import TextToSpeech from "../utils/TextToSpeech";

const StationCard = ({ selectedStation }) => {
  return (
    selectedStation && (
      <Card className="mt-4 p-4">
        <CardContent>
          <h2 className="text-lg font-bold">{selectedStation.name}</h2>
          <p>Latitude: {selectedStation.lat}</p>
          <p>Longitude: {selectedStation.lng}</p>
          <Button onClick={() => TextToSpeech(`You are at ${selectedStation.name}`)}>
            <Speaker className="w-4 h-4 mr-2" /> Voice Guide
          </Button>
        </CardContent>
      </Card>
    )
  );
};

export default StationCard;

