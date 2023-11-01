import React from "react";
import "./Navbar.css";
import Profile from "./navbar/Profile";

interface WindowSize {
  width: number;
  height: number;
}

interface Props {
  onClick: () => void;
  windowSize: WindowSize;
}

const Navbar = ({ onClick }: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-toggle">
        <h2>Navbar</h2>
        <button onClick={onClick} className="navbar-menu">
          <div className="navbar-menu-item"></div>
          <div className="navbar-menu-item"></div>
          <div className="navbar-menu-item"></div>
        </button>
      </div>
      <Profile></Profile>
    </nav>
  );
};

export default Navbar;
