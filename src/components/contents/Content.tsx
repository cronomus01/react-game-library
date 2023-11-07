import React, { useEffect, useState, lazy, Suspense } from "react";
import Search from "./Search";
import Sort from "./Sort";
import Games from "../../types/Games";

const SortDropDown = lazy(() => import("./SortDropDown"));

interface Props {
  category?: string;
}

const ALPHABETICAL = 1;
const RELEASE_DATE = 2;
const POPULARITY = 3;
const RELEVANCE = 4;

const Content = ({ category }: Props) => {
  const [games, setGames] = useState<Array<Games>>([]);
  const [searchedGames, setSearchedGame] = useState("");
  const [dropDownSort, setDropDownSort] = useState(false);
  const [sort, setSort] = useState(0);

  const fetchGames = async () => {
    try {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e99ab8614dmsh9fa4bdc448a9a1bp1352d2jsnaa3c19a0e7d4",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result: Array<Games> = await response.json();

      const search = Array.from(result).filter((game: Games) => {
        const newTitle = game.title.toLowerCase().split(" ").join(" ");

        if (newTitle.includes(searchedGames)) {
          return game;
        }
      });

      if (search) {
        setGames(search);
      } else {
        setGames(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortGameByWithCategory = async (value: string) => {
    try {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=${value}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e99ab8614dmsh9fa4bdc448a9a1bp1352d2jsnaa3c19a0e7d4",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result: Array<Games> = await response.json();

      const search = Array.from(result).filter((game: Games) => {
        const newTitle = game.title.toLowerCase().split(" ").join(" ");

        if (newTitle.includes(searchedGames)) {
          return game;
        }
      });

      if (search) {
        setGames(search);
      } else {
        setGames(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortGameByWithoutCategory = async (value: string) => {
    try {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${value}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e99ab8614dmsh9fa4bdc448a9a1bp1352d2jsnaa3c19a0e7d4",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result: Array<Games> = await response.json();

      const search = Array.from(result).filter((game: Games) => {
        const newTitle = game.title.toLowerCase().split(" ").join(" ");

        if (newTitle.includes(searchedGames)) {
          return game;
        }
      });

      if (search) {
        setGames(search);
      } else {
        setGames(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterGames = async () => {
    try {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e99ab8614dmsh9fa4bdc448a9a1bp1352d2jsnaa3c19a0e7d4",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result: Array<Games> = await response.json();

      const search = Array.from(result).filter((game: Games) => {
        const newTitle = game.title.toLowerCase().split(" ").join(" ");

        if (newTitle.includes(searchedGames)) {
          return game;
        }
      });

      if (search) {
        setGames(search);
      } else {
        setGames(result);
      }
    } catch (err) {
      console.log(err);
    }
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
        sortGameByWithCategory("popularity");
      }

      if (sort == RELEVANCE) {
        sortGameByWithCategory("relevance");
      }
    }
  }, [category, searchedGames, sort]);

  const displayGames = () => {
    return games.map((game: Games, gameIndex: number) => {
      return (
        <li
          key={gameIndex}
          className="border-2 border-slate-200 hover:border-slate-400 rounded-lg max-w-[15em] px-2 py-3 shadow-md bg-slate-500 text-slate-50 cursor-pointer"
        >
          <a href={game.game_url} target="_blank">
            <div>
              <h3 className="font-bold">{game.title}</h3>
              <p>{game.publisher}</p>
            </div>
            <img
              className="w-full rounded-lg mt-3"
              src={game.thumbnail}
              alt="image"
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
      );
    });
  };

  const searchGame = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedGame(event.target.value.toLowerCase());
  };

  const sortGame = (value: number) => {
    console.log(value);
    setSort(value);
  };

  return (
    <main className="p-2 basis-10/12">
      <div className="flex flex-wrap justify-between relative gap-2">
        <Search onSearch={searchGame}></Search>
        <Sort
          sort={dropDownSort}
          onClick={
            !dropDownSort
              ? () => setDropDownSort(true)
              : () => setDropDownSort(false)
          }
        ></Sort>
        {dropDownSort && (
          <Suspense>
            <SortDropDown onClick={sortGame} />
          </Suspense>
        )}
      </div>
      <ul className="flex flex-wrap gap-2 mt-2">{displayGames()}</ul>
    </main>
  );
};
export default Content;
