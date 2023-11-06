import React from "react";

interface Props {
  onClick?: () => void;
  sort: boolean;
}

const Sort = ({ onClick, sort }: Props) => {
  return (
    <div
      className="flex gap-2 items-center border-2 px-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      <h2 className="pointer-events-none">Sort</h2>
      {sort ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      )}
    </div>
  );
};

export default Sort;
