import { createContext, useContext } from "react";

import Games from "../types/Games";

export const GameContext = createContext<Games | undefined>(undefined)

export function useGamesContext() {
  const games = useContext(GameContext);
  
  if(!games) {
    throw new Error ("useContext needs to use inside ExampleContext.Provider")
  }

  return games
}