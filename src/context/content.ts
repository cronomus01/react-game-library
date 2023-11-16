import { createContext, useContext } from "react";

interface DropdownSort {
 dropDownSort: boolean,
 dropDownToggle: () => void,
 sortGame: (value: number) => void,
 sort: number,
}

export const DropdownSortContext = createContext<DropdownSort | undefined>(undefined)

export function useDropdownSortContext() {
  const dropdownSort = useContext(DropdownSortContext);
  
  if(!dropdownSort) {
    throw new Error ("useContext needs to use inside ExampleContext.Provider")
  }

  return dropdownSort
}