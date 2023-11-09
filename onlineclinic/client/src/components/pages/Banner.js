import React from "react";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import PopularSearches from "./PopularSearches";
export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-12 align-items-center">
            <div className="col-md-5 align-items-center">
              <h2>Your Home For Health</h2>
              <h3>Find and Book</h3>
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <LocationSelector />
                <SearchBar />
                <PopularSearches />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
