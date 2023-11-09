import React from "react";

export default function PopularSearches() {
  return (
    <div className="popular-searches">
      <div className="d-flex align-items-center">
        <div className="mr-3 px-2 py-3">
          <p>Popular Searches: </p>
        </div>
        <div className="mr-3 py-3">
          <p>Dermatologist</p>
        </div>
        <div className="mr-3 px-4 py-3">
          <p>Cardiologist</p>
        </div>
        <div className="mr-3 py-1">
          {/* <p>Others</p> */}
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Others
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Nephrologist
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Orthopedic
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Neurologist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
