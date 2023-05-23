import {AsteroidsService} from "../core/services";
import {AsteroidDetails, FetchAsteroidsRequest, ListingAsteroid, Page} from "@asteroids/asteroids";
import * as http from 'https';

const getNasaURL = (startDate: Date, endDate: Date) => `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate.toLocaleDateString()}&end_date=${endDate.toLocaleDateString()}&api_key=DEMO_KEY`

export class NasaAsteroidsService implements AsteroidsService {

  fetchAsteroids(request: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>> {
    return new Promise((resolve, reject) => {
      // const request = http.get(getNasaURL(request.startDate, request.endDate))
      setTimeout(() => {
        return resolve({
          data: [
            {name: "tes asteroid", id: "test", itsFavorite: false},
            {name: "tes asteroid", id: "test 2", itsFavorite: false},
            {name: "tes asteroid", id: "test 3", itsFavorite: false},
          ], nextURL: null, previousURL: null
        });
      }, 3000)

    })


  }

  getById(asteroidID: string): Promise<AsteroidDetails> {
    return Promise.resolve({name: "tes asteroid", id: "test"},);
  }

}
