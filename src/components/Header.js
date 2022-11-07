import React from "react";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--logo-wrapper">
        <img className="header--logo" src={logo}></img>
      </div>
    </header>
  );
}
