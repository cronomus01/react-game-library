import { useState, useEffect, lazy, Suspense, memo, useCallback } from "react";
const Categories = lazy(() => import("./contents/Categories"));
const Content = lazy(() => import("./contents/Content"));
const BackToTop = lazy(() => import("./contents/BackToTop"));
const Main = () => {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<string | number>(0);
  const [backToTop, setBackToTop] = useState<boolean>(false);

  console.log("Main rerendered");

  const onClickCategory = useCallback(
    (index: number, category: string) => {
      scrollUp();
      setIndex(index);
      setCategory(category);
    },
    [category]
  );

  const scrollToTop = useCallback(() => {
    if (window.scrollY >= 1000) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  }, [category]);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, [category]);

  const scrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [backToTop]);

  return (
    <main className="flex items-start relative">
      <Suspense fallback={<div>Loading</div>}>
        <Categories
          onClick={onClickCategory}
          categoryIndex={index}
        ></Categories>
        <Content category={category}></Content>
        {backToTop && <BackToTop onClick={scrollUp} />}
      </Suspense>
    </main>
  );
};

export default memo(Main);
