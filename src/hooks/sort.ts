import { useState } from "react"
const useSort = () => {
  const [dropDownSort, setDropDownSort] = useState(false);
  const [sort, setSort] = useState<number>(0);

  const onToggle = () => {
    if(dropDownSort) {
      setDropDownSort(false)
    }else {
      setDropDownSort(true)
    }
  };

  const setGame = (value: number) => {
    setSort(value);
  }
  

  return {
    dropDownSort: dropDownSort,
    onToggle: onToggle,
    setGame: setGame,
    sort: sort,
  }
}

export default useSort