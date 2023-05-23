import {FetchAsteroidsRequest, ListingAsteroid} from "@asteroids/asteroids";
import {useState} from "react";
import {addToFavorites, fetchAsteroidsList, removeFromFavorites} from "../../data-access/asteroids";


export function useRemoveFromFavorite() {

  const [itsLoading, setItsLoading] = useState<boolean>(false)

  const execute = async (asteroidId: string) => {
    setItsLoading(true);
    return removeFromFavorites(asteroidId)
      .catch((err) => console.log)
      .finally(() => setItsLoading(false));
  };

  return {
    execute,
    itsLoading,
  };

}
