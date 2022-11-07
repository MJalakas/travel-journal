import React from "react";
import locLogo from "../images/location-logo.png";
import data from "../data";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--image-wrapper">
          <img className="card--image" src={props.imageUrl} />
        </div>

        <div className="card--info">
          <div className="card--location">
            <div className="card--location-logo-wrapper">
              <img className="card--location-logo" src={locLogo} />
            </div>
            <div className="card--location-text">{props.location}</div>
            <a className="card--location-gmaps" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>

          <div className="card--title">{props.title}</div>
          <div className="card--date">
            {props.startDate} - {props.endDate}
          </div>
          <div className="card--description">{props.description}</div>
        </div>
      </div>
      <hr className="card-separator"></hr>
    </>
  );
}
