import { useState, useEffect } from "react";
import Content from "./contents/Content";
import Categories from "./contents/Categories";

const Main = () => {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<string | number>(0);

  const onClickCategory = (index: number, category: string) => {
    setIndex(index);
    setCategory(category);
    console.log(index);
    console.log(category);
  };

  useEffect(() => {}, [index]);

  return (
    <main className="flex items-start">
      <Categories onClick={onClickCategory} categoryIndex={index}></Categories>
      <Content category={category}></Content>
    </main>
  );
};

export default Main;
