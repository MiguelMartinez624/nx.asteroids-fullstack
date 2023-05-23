import {ListingAsteroid} from "@asteroids/asteroids";

export interface Page<T> {
  data: T[];
  nextURL: string | null;
  previousURL: string | null;
}

export interface FetchAsteroidsRequest {
  startDate: Date;
  endDate: Date;
}

export interface FetchAsteroidsList {
  execute(request: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>>;
}

export interface AddToFavorite {
  execute(asteroidID: string): Promise<boolean>;
}


export interface RemoveFromFavorite {
  execute(asteroidID: string): Promise<boolean>;
}
