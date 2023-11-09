import React from "react";

export default function LocationSelector() {
  return (
    <div className="location-Selector">
      <div class="dropdown">
      <select className="form-control">
        <option value="">Select Location</option>
        <option value="location1">Kolkata</option>
        <option value="location2">Mumbai</option>
        <option value="location3">Bangalore</option>
        <option value="location4">Delhi</option>
      </select>
      </div>
    </div>
  );
}
