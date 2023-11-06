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
  toggle?: boolean;
}

const Navbar = ({ onClick, toggle }: Props) => {
  return (
    <nav className="bg-slate-900 flex justify-between items-center px-5">
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-slate-50"></h2>
      </div>
      <Profile></Profile>
    </nav>
  );
};

export default Navbar;
