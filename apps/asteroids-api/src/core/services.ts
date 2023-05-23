import {AsteroidDetails, FetchAsteroidsRequest, Page} from "@asteroids/asteroids";
import {ListingAsteroid} from "@asteroids/asteroids";

export interface AsteroidsService {
  fetchAsteroids(request: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>>

  getById(asteroidID: string): Promise<AsteroidDetails>;
}


export interface AsteroidsStore {

  saveAsteroid(asteroidID: string, asteroidDetails: AsteroidDetails): void;

  remove(asteroidID: string): void;
}
