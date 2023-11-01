import React, { ReactNode, useState, useEffect } from "react";
import Navbar from "./contents/Categories";
import Content from "./contents/Content";
import "./Main.css";
import Categories from "./contents/Categories";

const Main = () => {
  const [category, setCategory] = useState("All");

  const [index, setIndex] = useState(0);
  const [clickedCategory, setClickCategory] = useState<ReactNode>();

  useEffect(() => {
    if (clickedCategory?.dataset?.value == index) {
      clickedCategory?.classList.add("active");
    }

    return () => {
      clickedCategory?.classList.remove("active");
    };
  }, [index]);

  const onClickCategory = (event) => {
    setCategory(event.target.innerText);
    setIndex(event.target.dataset.value);
    // console.log(event.target.dataset.value);
    setClickCategory(event.target);
  };

  return (
    <main className="content">
      <Categories onClick={onClickCategory} categoryIndex={index}></Categories>
      <Content category={category}></Content>
    </main>
  );
};

export default Main;
