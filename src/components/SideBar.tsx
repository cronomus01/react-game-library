import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import useToggleSidebar from "../hooks/toggle-sidebar";

interface WindowSize {
  width: number;
  height: number;
}

interface Props {
  setToggleClass?: undefined | "heading-open" | "heading-close";
  onClick: () => void;
  toggle?: boolean;
  windowSize: WindowSize;
}
const SideBar = ({ setToggleClass }: Props) => {
  const [linkActive, setLinkActive] = useState(0);

  const addActiveClass = (event) => {
    setLinkActive(event.target.dataset.value);
  };
  return (
    <aside className={`app-aside ${setToggleClass}`}>
      <header className={"heading"}>
        <h2 className="heading-logo">Logo</h2>
      </header>
      <nav className="app-aside-nav">
        <ul className="app-aside-list">
          <li className="app-aside-list-item">
            <a
              href="#home"
              className={
                linkActive == 0
                  ? "app-aside-list-link active"
                  : "app-aside-list-link"
              }
              onClick={addActiveClass}
              data-value="0"
            >
              Home
            </a>
          </li>
          <li className="app-aside-list-item">
            <a
              href="#about"
              className={
                linkActive == 1
                  ? "app-aside-list-link active"
                  : "app-aside-list-link"
              }
              onClick={addActiveClass}
              data-value="1"
            >
              About
            </a>
          </li>
          <li className="app-aside-list-item">
            <a
              href="#contact"
              className={
                linkActive == 2
                  ? "app-aside-list-link active"
                  : "app-aside-list-link"
              }
              onClick={addActiveClass}
              data-value="2"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
