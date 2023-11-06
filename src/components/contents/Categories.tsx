import React, { useState, useEffect } from "react";

const categories = [
  "All",
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

interface Categories {
  categories: Array<string>;
}

interface Props {
  onClick: (index: number, category: string) => void;
  categoryIndex: string | number;
}
const Categories = ({ onClick, categoryIndex }: Props) => {
  const displayCategories = () => {
    return categories.map((category, index) => {
      return (
        <>
          <li
            key={index}
            onClick={() => onClick(index, category)}
            data-value={categoryIndex}
            className={`${
              categoryIndex == index ? "bg-slate-900" : "bg-slate-500"
            } text-slate-100 text-center cursor-pointer border-2 rounded-lg px-2 ${
              index === 0 && "first-category"
            }`}
          >
            <h4>{category}</h4>
          </li>
        </>
      );
    });
  };

  return (
    <aside className="basis-2/12">
      <nav>
        <ul className="flex flex-col gap-1 px-2 pt-2">{displayCategories()}</ul>
      </nav>
    </aside>
  );
};

export default Categories;
