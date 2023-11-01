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
      console.log(windowSize.width)
    };

      if(windowSize.width >= 720) {
        console.log(windowSize.width)
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


  const setToggleClass = () => {
    if(toggle) {
      return "heading-open"
    } else {
      return "heading-close"
    }
  };

  return [
    {
      windowSize: windowSize,
      toggle: toggle,
      onToggle: onToggle,
      setToggleClass: setToggleClass,
    }
  ]
}

export default useToggleSidebar