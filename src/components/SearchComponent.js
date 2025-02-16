import React from "react";
import { Input, Button } from "@/components/ui/input";

const SearchComponent = ({ destination, setDestination, handleSearch }) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Enter facility (e.g., Restroom)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button onClick={handleSearch} className="mt-2">Search</Button>
    </div>
  );
};

export default SearchComponent;

