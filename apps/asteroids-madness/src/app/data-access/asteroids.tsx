import {FetchAsteroidsRequest, ListingAsteroid, Page} from "@asteroids/asteroids";


export async function fetchAsteroidsList(request: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>> {

  return fetch(`/api/asteroids?start_date=${request.startDate.toLocaleDateString()}&end_date=${request.endDate.toLocaleDateString()}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( async (res) => {
      const result = await res.json();
      console.log({result})
      return result
    } )

}

export async function addToFavorites(asteroidsId: string): Promise<boolean> {

  return fetch(`/api/asteroids/${asteroidsId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( async (res) => {
      const result = await res.json();
      console.log({result})
      return result
    } )

}

export async function removeFromFavorites(asteroidsId: string): Promise<boolean> {

  return fetch(`/api/asteroids/${asteroidsId}/remove`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( async (res) => {
      const result = await res.json();
      console.log({result})
      return result
    } )

}

