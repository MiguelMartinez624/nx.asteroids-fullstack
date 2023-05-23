import {FetchAsteroidsRequest, ListingAsteroid} from "@asteroids/asteroids";
import {useState} from "react";
import {fetchAsteroidsList} from "../../data-access/asteroids";


export function useFetchAsteroidsListCase() {

  const [itsLoading, setItsLoading] = useState<boolean>(false)
  const [data, setData] = useState<ListingAsteroid[]>([])

  const execute = async (request: FetchAsteroidsRequest) => {
    setItsLoading(true);
    return fetchAsteroidsList(request)
      .then((res) => setData(res.data))
      .catch((err) => console.log)
      .finally(() => setItsLoading(false));
  };

  return {
    execute,
    itsLoading,
    asteroidsList: data
  };

}
