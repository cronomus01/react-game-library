import { memo, Suspense } from "react";
import { useDropdownSortContext } from "../../context/content";
import SortDropDown from "./SortDropDown";
import useSort from "../../hooks/sort";
interface SortDropDownProps {
  onClick: (value: number) => void;
}

const Sort = ({ onClick }: SortDropDownProps) => {
  // const dropDown = useDropdownSortContext();
  const { onToggle, dropDownSort } = useSort();

  return (
    <div
      className="flex gap-2 items-center border px-2 py-1 rounded-md cursor-pointer hover:border-slate-900 text-slate-900"
      onClick={onToggle}
    >
      <h2 className="pointer-events-none">Sort</h2>
      {dropDownSort ? (
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
      {dropDownSort && (
        <Suspense>
          <SortDropDown onClick={onClick} />
        </Suspense>
      )}
    </div>
  );
};

export default memo(Sort);
