import React, { useState, useEffect } from "react";
import "./Category.css";

const categories = [
  "All",
  "Action game",
  "Sports video game",
  "Adventure game",
];

interface Categories {
  categories: Array<string>;
}

interface Props {
  onClick: () => void;
  categoryIndex: number;
}
const Categories = ({ onClick, categoryIndex }: Props) => {
  const displayCategories = () => {
    return categories.map((category, index) => {
      return (
        <>
          <li
            key={index}
            onClick={onClick}
            data-value={index}
            className={
              categoryIndex == index ? "list-item active" : "list-item"
            }
          >
            <h4>{category}</h4>
          </li>
        </>
      );
    });
  };

  return (
    <aside className="content-categories">
      <nav className="category-nav">
        <ul className="category-list">{displayCategories()}</ul>
      </nav>
    </aside>
  );
};

export default Categories;
