import React from 'react'

export default function SearchBar() {
  return (
    <div className='searchBar'>
         <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for doctors, clinics, etc."
        />
        <div className="input-group-append">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  )
}
