import {http, HttpResponse} from 'msw';
import { games } from './data';

export const handlers = [
  // @ts-ignore
  http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', ({request}) => {
    // Construct a URL instance out of the intercepted request.
    const url = new URL(request.url)

    // Read the "id" URL query parameter using the "URLSearchParams" API.
    // Given "/product?id=1", "productId" will equal "1".
    const category = url.searchParams.get('category')
    const sortBy = url.searchParams.get('sort-by')

    console.log(request);
    
    
    if(category && sortBy) {

      const sortedByCategory = games.filter(game => {

        const genre = game.genre.toLowerCase().split(' ').join('-');

        if(genre.includes(category)) {
          return game;
        }
      })

      let sort;

      if(sortBy === 'alphabetical') {
        sort = sortedByCategory.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      }

      if(sortBy === 'release-date') {
        sort = sortedByCategory.sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          }
          if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        })
      }

      console.log(sort)

      if(sort) {
        return HttpResponse.json(sort)
      } else{
        return HttpResponse.json([{error: "Error"}])
      }
    }

    if(category) {
      const sortedGame = games.filter(game => {

        const genre = game.genre.toLowerCase().split(' ').join('-');

        if(genre.includes(category)) {
          return game;
        }
      })

      if(sortedGame) {
        return HttpResponse.json(sortedGame)
      } else{
        return HttpResponse.json([{error: "Error"}])
      }
    }

    if(sortBy) {
      let sort;

      if(sortBy === 'alphabetical') {
        sort = games.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      }

      if(sortBy === 'release-date') {
        sort = games.sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          }
          if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        })
      }

      console.log(sort)

      if(sort) {
        return HttpResponse.json(sort)
      } else{
        return HttpResponse.json([{error: "Error"}])
      }
    }

    return HttpResponse.json(games)
  }),
]