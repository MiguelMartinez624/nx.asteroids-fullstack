import {
  AddToFavorite,
  AsteroidDetails,
  FetchAsteroidsList,
  FetchAsteroidsRequest,
  ListingAsteroid,
  Page
} from "@asteroids/asteroids";
import {AsteroidsService, AsteroidsStore} from "./services";

export class APIFetchAsteroidsList implements FetchAsteroidsList {

  constructor(private readonly asteroidsService: AsteroidsService) {
  }

  async execute(request: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>> {
    console.log("fetching request", JSON.stringify(request, null, 2));
    const result = await this.asteroidsService.fetchAsteroids(request);
    console.log(`asteroids found :: ${result.data.length}`);
    return result;
  }
}

export class APIAddToFavorite implements AddToFavorite {

  constructor(private readonly asteroidsService: AsteroidsService,
              private readonly asteroidStore: AsteroidsStore) {
  }

  async execute(asteroidID: string): Promise<boolean> {
    const asteroidDetails: AsteroidDetails = await this.asteroidsService.getById(asteroidID);

    this.asteroidStore.saveAsteroid(asteroidID, asteroidDetails);

    return true;
  }

}
