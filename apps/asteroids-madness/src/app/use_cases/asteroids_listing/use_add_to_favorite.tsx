import {FetchAsteroidsRequest, ListingAsteroid} from "@asteroids/asteroids";
import {useState} from "react";
import {addToFavorites, fetchAsteroidsList} from "../../data-access/asteroids";


export function useAddToFavoriteCase() {

  const [itsLoading, setItsLoading] = useState<boolean>(false)

  const execute = async (asteroidId: string) => {
    setItsLoading(true);
    return addToFavorites(asteroidId)
      .catch((err) => console.log)
      .finally(() => setItsLoading(false));
  };

  return {
    execute,
    itsLoading,
  };

}
