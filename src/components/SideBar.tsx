import React, { useState } from "react";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import GamesIcon from "./icons/GamesIcon";

interface WindowSize {
  width: number;
  height: number;
}

interface Props {
  setToggleClass?: "heading-open" | "heading-close";
  onClick: () => void;
  toggle?: boolean;
  windowSize: WindowSize;
}
const SideBar = ({ toggle, onClick }: Props) => {
  const [linkActive, setLinkActive] = useState<number | string>("0");

  const addActiveClass = (event: React.MouseEvent) => {
    const target = event.target as HTMLAnchorElement;
    if (typeof target.dataset.value === "string") {
      setLinkActive(target.dataset.value);
    }
  };

  const activeClassStyle = (index: number) => {
    return linkActive == index
      ? "flex justify-center md:justify-start bg-slate-500 py-2 w-full block text-slate-50 font-bold"
      : "flex justify-center md:justify-start py-2 w-full block text-slate-50 font-bold";
  };

  return (
    <aside
      className={`w-full h-full relative app-aside bg-slate-900 p-0 after:content-[''] after:bg-slate-500 after:w-1 after:absolute after:right-0 after:top-0 after:h-full after:z-[-1] py-10 isolate`}
    >
      <header
        className={`heading text-white mb-3 ${
          toggle ? "px-3 md:pl-5" : "px-3 md:pl-3"
        }`}
      >
        <h1 className={`font-bold`}>Game Library</h1>
      </header>
      <nav>
        <button
          onClick={onClick}
          className={`bg-slate-500 absolute px-2 py-1 top-0 right-0 rounded-sm`}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          )}
        </button>
        <ul className="flex justify-center flex-col gap-1">
          <li>
            <a
              href="#games"
              className={`${activeClassStyle(0)} ${
                !toggle ? "md:px-5" : "md:pl-9"
              } flex items-center`}
              onClick={addActiveClass}
              data-value="0"
            >
              <GamesIcon>
                {toggle && <h1 className="pointer-events-none">Games</h1>}
              </GamesIcon>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${activeClassStyle(1)} ${
                !toggle ? "md:px-5" : "md:pl-9"
              }`}
              onClick={addActiveClass}
              data-value="1"
            >
              <AboutIcon>
                {toggle && <h1 className="pointer-events-none">About</h1>}
              </AboutIcon>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${activeClassStyle(2)} ${
                !toggle ? "md:px-5" : "md:pl-9"
              }`}
              onClick={addActiveClass}
              data-value="2"
            >
              <ContactIcon>
                {toggle && <h1 className="pointer-events-none">Contact</h1>}
              </ContactIcon>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
