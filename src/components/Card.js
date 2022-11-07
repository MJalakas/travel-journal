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
            <div className="card--location-text">JAPAN</div>
            <a className="card--location-gmaps" href="">
              View on Google Maps
            </a>
          </div>

          <div className="card--title">Mount Fuji</div>
          <div className="card--date">12 Jan, 2021 - 24 Jan, 2021</div>
          <div className="card--description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </div>
        </div>
      </div>
      <hr className="card-separator"></hr>
    </>
  );
}
