import { useState, useEffect } from "react"
const useToggleSidebar = () => {
  const [toggle, setToggle] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const setSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

      if(windowSize.width >= 768) {
        setToggle(true)
      } else {
        setToggle(false)
      }

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [windowSize]);


  const onToggle = () => {
    if(toggle) {
      setToggle(false);
    }else {
      setToggle(true);
    }
  };

  return [
    {
      windowSize: windowSize,
      toggle: toggle,
      onToggle: onToggle,
    }
  ]
}

export default useToggleSidebar