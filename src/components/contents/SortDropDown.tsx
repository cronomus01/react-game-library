const ALPHABETICAL = 1;
const RELEASE_DATE = 2;
const POPULARITY = 3;
const RELEVANCE = 4;

interface SortDropDownProps {
  onClick: (value: number) => void;
}

const SortDropDown = ({ onClick }: SortDropDownProps) => {
  return (
    <div className="absolute border bg-slate-50 top-11 right-0 md:top-10 rounded-lg text-slate-900 p-2 max-w-[20em]">
      <ul>
        <li
          className="relative py-2 px-3 rounded-md cursor-pointer hover:after:content-[''] hover:after:inset-0 after:border hover:after:border-slate-900 after:left-0 after:absolute hover:after:rounded-md"
          onClick={() => onClick(ALPHABETICAL)}
        >
          Alphabetical
        </li>
        <li
          className="relative py-2 px-3 rounded-md cursor-pointer hover:after:content-[''] hover:after:inset-0 after:border hover:after:border-slate-900 after:left-0 after:absolute hover:after:rounded-md"
          onClick={() => onClick(RELEASE_DATE)}
        >
          Release-Date
        </li>
        <li
          className="relative py-2 px-3 rounded-md cursor-pointer hover:after:content-[''] hover:after:inset-0 after:border hover:after:border-slate-900 after:left-0 after:absolute hover:after:rounded-md"
          onClick={() => onClick(POPULARITY)}
        >
          Popularity
        </li>
        <li
          className="relative py-2 px-3 rounded-md cursor-pointer hover:after:content-[''] hover:after:inset-0 after:border hover:after:border-slate-900 after:left-0 after:absolute hover:after:rounded-md"
          onClick={() => onClick(RELEVANCE)}
        >
          Relevance
        </li>
      </ul>
    </div>
  );
};

export default SortDropDown;
