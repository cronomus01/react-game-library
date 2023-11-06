interface Props {
  onClick: (value: number) => void;
}

const ALPHABETICAL = 1;
const RELEASE_DATE = 2;
const POPULARITY = 3;
const RELEVANCE = 4;

const SortDropDown = ({ onClick }: Props) => {
  return (
    <div className="absolute border-2 bg-slate-500 top-9 right-0 md:top-8 rounded-lg text-white p-1 max-w-[20em]">
      <ul>
        <li
          className="hover:bg-slate-900 py-1 rounded-md px-3 cursor-pointer"
          onClick={() => onClick(ALPHABETICAL)}
        >
          Alphabetical
        </li>
        <li
          className="hover:bg-slate-900 py-1 rounded-md px-3 cursor-pointer"
          onClick={() => onClick(RELEASE_DATE)}
        >
          Release-Date
        </li>
        <li
          className="hover:bg-slate-900 py-1 rounded-md px-3 cursor-pointer"
          onClick={() => onClick(POPULARITY)}
        >
          Popularity
        </li>
        <li
          className="hover:bg-slate-900 py-1 rounded-md px-3 cursor-pointer"
          onClick={() => onClick(RELEVANCE)}
        >
          Relevance
        </li>
      </ul>
    </div>
  );
};

export default SortDropDown;
