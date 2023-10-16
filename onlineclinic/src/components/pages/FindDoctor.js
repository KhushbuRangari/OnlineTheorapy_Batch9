import React from 'react';
import LocationSelector from './LocationSelector';
import SearchBar from './SearchBar';
import PopularSearches from './PopularSearches';
import { Link } from "react-router-dom";

export default function FindDoctor() {
    return (
        <div>
            {/* *********Banner************* */}

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


            {/* **********Services*************** */}
            <div className="options">
                <span className="option px-2">

                    <span>Consult a Doctor</span>
                </span>
                <span className="option px-2">

                    <span>Book Test</span>
                </span>
                <span className="option px-2">

                    <span>View Medical Records</span>
                </span>
                <span className="option px-2">

                    <span>Order Medicines</span>
                </span>
                <span className="option px-2">

                    <span>Read Articles</span>
                </span>
            </div>
            {/* *******SecurityInfo****** */}
            <div className="security">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Safety of your data is our top priority.</h3>
                            <ul>
                                <li>Multi-level security checks</li>
                                <li>Multiple data backups</li>
                                <li>Stringent data privacy policies</li>
                            </ul>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ********Info******** */}
            <div className="security-info">
                <div className="security-info-item">
                    <span className="security-info-item px-2">256-bit encryption</span>
                    <span className="security-info-item px-2">ISO 27001 certified</span>
                    <span className="security-info-item px-2">HIPAA compliant data centers</span>
                    <span className="security-info-item px-2">DSCI member</span>
                </div>
            </div>


        </div>
    )
}
