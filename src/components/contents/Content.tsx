import React, { useEffect, memo } from "react";
import Search from "./Search";
import Sort from "./Sort";
import Games from "../../types/Games";
import useSort from "../../hooks/sort";
import useGames from "../../hooks/games";

interface Props {
  category: string;
}

const ALPHABETICAL = 1;
const RELEASE_DATE = 2;
const POPULARITY = 3;
const RELEVANCE = 4;

const Content = ({ category }: Props) => {
  const {
    games,
    searchGame,
    fetchGames,
    sortGameByWithCategory,
    sortGameByWithoutCategory,
    filterGames,
    searchedGames,
  } = useGames(category);

  const { sort, setGame } = useSort();

  const handleSort = (value: number) => {
    setGame(value);
  };

  useEffect(() => {
    if (category == "All") {
      fetchGames();

      if (sort == ALPHABETICAL) {
        sortGameByWithoutCategory("alphabetical");
      }

      if (sort == RELEASE_DATE) {
        sortGameByWithoutCategory("release-date");
      }

      if (sort == POPULARITY) {
        console.log(POPULARITY);
        sortGameByWithoutCategory("popularity");
      }

      if (sort == RELEVANCE) {
        sortGameByWithoutCategory("relevance");
      }
    } else {
      filterGames();

      if (sort == ALPHABETICAL) {
        sortGameByWithCategory("alphabetical");
      }

      if (sort == RELEASE_DATE) {
        sortGameByWithCategory("release-date");
      }

      if (sort == POPULARITY) {
        console.log(POPULARITY);
        sortGameByWithCategory("popularity");
      }

      if (sort == RELEVANCE) {
        sortGameByWithCategory("relevance");
      }
    }
  }, [category, searchedGames, sort]);

  return (
    <main className="p-2 basis-10/12">
      <div className="flex flex-wrap justify-between relative gap-2">
        <Search onSearch={searchGame}></Search>
        <Sort onClick={handleSort}></Sort>
      </div>
      <ul className="flex flex-wrap gap-2 mt-2">
        {games.length > 0 &&
          games.map((game: Games, gameIndex: number) => (
            <li
              key={gameIndex}
              className="border hover:border-slate-900 rounded-lg w-64 flex-row px-2 py-3 shadow-sm bg-slate-300 border-slate-400 cursor-pointer text-slate-900"
            >
              <a href={game.game_url} target="_blank">
                <div>
                  <h3 className="font-bold">{game.title}</h3>
                  <p>{game.publisher}</p>
                </div>
                <img
                  className="w-full rounded-lg mt-3"
                  src={game.thumbnail}
                  alt={game.title}
                />
                <div className="mt-5 flex flex-col">
                  <div className="flex gap-1">
                    <h6 className="text-sm">Category:</h6>
                    <p className="text-sm font-bold">{game.genre}</p>
                  </div>
                  <div className="flex gap-1">
                    <h6 className="text-sm">Platform:</h6>
                    <p className="text-sm font-bold">{game.platform}</p>
                  </div>
                  <div className="flex gap-1">
                    <h6 className="text-sm">Release Date:</h6>
                    <p className="text-sm font-bold">{game.release_date}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
};
export default memo(Content);
