import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <H1>Paris</H1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="mostly cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
