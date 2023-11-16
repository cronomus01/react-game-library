import { useState, useCallback } from "react"
import Games from "../types/Games";
const useGames = (category: string) => {
  const [games, setGames] = useState<Array<Games>>([]);
  const [searchedGames, setSearchedGame] = useState("");

  console.log("Content rendered");
  

  const fetchGames = useCallback(async () => {
    console.log("fetching games");
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

        if (newTitle.includes(searchedGames)) return game;
      });

      if (search) {
        setGames(search);
      } else {
        setGames(result);
      }
    } catch (err) {
      console.log(err);
    }
  }, [searchedGames]);



  const filterGames = async () => {
    console.log("filtering games");
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

  const sortGameByWithCategory = async (value: string) => {
    console.log("sorting");
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
  
      // const search = Array.from(result).filter((game: Games) => {
      //   const newTitle = game.title.toLowerCase().split(" ").join(" ");

      //   console.log(newTitle);
  
      //   if (newTitle.includes(searchedGames)) {
      //     return game;
      //   }
      // });
  
      // if (search) {
        // setGames(search);
      // } else {
        setGames(result);
      // }
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
  
      // const search = Array.from(result).filter((game: Games) => {
      //   const newTitle = game.title.toLowerCase().split(" ").join(" ");
  
      //   console.log(newTitle)

      //   if (newTitle.includes(searchedGames)) {
      //     return game;
      //   }
      // });
  
      // if (search) {
      //   setGames(search);
      // } else {
        setGames(result);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const searchGame = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedGame(event.target.value.toLowerCase());
  };

  return {
    games: games,
    fetchGames: fetchGames,
    filterGames: filterGames,
    sortGameByWithCategory: sortGameByWithCategory,
    sortGameByWithoutCategory: sortGameByWithoutCategory,
    searchGame: searchGame,
    searchedGames: searchedGames
  }
}

export default useGames


