import React, { useEffect, useState, ReactNode } from "react";
import "./Content.css";
import Search from "./Search";

interface Games {
  category: Array<string>;
  gameId: number;
  title: string;
  description: string;
}

const gameLists: Array<Games> = [
  {
    category: ["action game", "sports video game", "adventure game"],
    gameId: 1,
    title: "Batman",
    description: "lorem ipsum",
  },
  {
    category: ["sports video game"],
    gameId: 2,
    title: "Spidermam",
    description: "lorem ipsum",
  },
  {
    category: ["action game", "sports video game", "adventure game"],
    gameId: 3,
    title: "Superman",
    description: "lorem ipsum",
  },
  {
    category: ["adventure game"],
    gameId: 4,
    title: "Hulk",
    description: "lorem ipsum",
  },
  {
    category: ["sports video game"],
    gameId: 5,
    title: "COD",
    description: "lorem ipsum",
  },
];

interface Props {
  category?: string;
}

const Content = ({ category }: Props) => {
  const [games, setGames] = useState<Array<Games>>([]);
  const [searchedGames, setSearchedGame] = useState("");

  useEffect(() => {
    console.log("starting");
    const fetchGames = () => {
      try {
        const newList = gameLists.filter((game: Games) => {
          if (category == "All") {
            if (
              game.title.toLowerCase().includes(searchedGames) ||
              game.category.includes(searchedGames)
            ) {
              return game;
            }
          } else {
            if (!searchedGames) {
              if (game.category.includes(category.toLowerCase())) {
                return game;
              }
            }
          }
        });

        const games = new Promise<Array<Games>>((resolve, reject) => {
          setTimeout(() => {
            resolve(newList);
          }, 500);
        });
        games.then((data) => {
          console.log("fetch finished");
          setGames(data);
        });
        console.log("start next");
      } catch (err) {
        console.log(err);
      }
    };

    const displayGames = async () => {
      fetchGames();
    };

    displayGames();
  }, [category, searchedGames]);

  const displayGames = () => {
    return games.map((game: Games, gameIndex: number) => {
      return (
        <li key={gameIndex} className="game-lists-item">
          <div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
          <img src="vite.svg" alt="image" />
          <div>
            <h6>Categories:</h6>
            <ul className="content-category-list">
              {game.category.map((category: string, categoryIndex: number) => {
                return (
                  <>
                    <li key={categoryIndex}>
                      <h5>{category}</h5>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </li>
      );
    });
  };

  const searchGame = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedGame(event.target.value.toLowerCase());
  };

  return (
    <main className="main-content">
      <Search onSearch={searchGame}></Search>
      <ul className="game-lists">{displayGames()}</ul>
    </main>
  );
};
export default Content;
