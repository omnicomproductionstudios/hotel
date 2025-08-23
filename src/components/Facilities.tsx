"use client";

import { useState } from "react";
import {
  Bed,
  BedDouble,
  BrushCleaning,
  Clock4,
  HandCoins,
  PhoneCall,
  Shirt,
  WashingMachine,
} from "lucide-react";

export default function Facilities() {
  const [activeTab, setActiveTab] = useState("nav-three"); // default open tab

  const tabs = [
    { id: "nav-one", label: "Property Amenities (12)", title: "Property Amenities" },
    { id: "nav-two", label: "Room Amenities (3)", title: "Room Amenities" },
    { id: "nav-three", label: "Hotel Services (8)", title: "Hotel Services On-Site" },
    { id: "nav-four", label: "Activities (5)", title: "Activities" },
    { id: "nav-five", label: "View All (28)", title: "View all Amenities" },
  ];

  const renderAmenities = () => (
    <div className="row">
      <div className="col-md-3">
        <div className="ser">
          <Shirt />
          <p>Valet Dry Cleaning</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <WashingMachine />
          <p>Same Day Dry Cleaning</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <Clock4 />
          <p>24 Hour Room Service</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <BedDouble />
          <p>Room Service</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <PhoneCall />
          <p>Wake-Up Calls</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <Bed />
          <p>Turndown Service</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <HandCoins />
          <p>Service Request</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ser">
          <BrushCleaning />
          <p>Daily Housekeeping</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="facilities space">
      <div className="container">
        <img src="/images/facilities.jpg" alt="Facilities" />

        <div className="fatured_amenities">
          <h2 className="title">Featured Amenities on Site</h2>

          {/* Tabs */}
          <nav>
            <div className="nav nav-tabs justify-content-center" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Tab content */}
          <div className="tab-content mt-3">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                role="tabpanel"
              >
                <div className="info">
                  <h3>{tab.title}</h3>
                  {renderAmenities()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
