import {AsteroidsService} from "../core/services";
import {AsteroidDetails, FetchAsteroidsRequest, ListingAsteroid, Page} from "@asteroids/asteroids";
import axios from "axios";

const getNasaURL = (startDate: Date, endDate: Date) => `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}&api_key=DEMO_KEY`

export interface NASAAPiResponse {
  link: {
    next: string,
    previous: string,
    self: string
  },
  element_count: number,
  // actually not ListingAsteroid but share same structure
  near_earth_objects: { [date: string]: ListingAsteroid[] }
}

export class NasaAsteroidsService implements AsteroidsService {

  async fetchAsteroids(fetchRequest: FetchAsteroidsRequest): Promise<Page<ListingAsteroid>> {
    try {
      const url = getNasaURL(fetchRequest.startDate, fetchRequest.endDate);
      console.log({url});
      const requestResult = await axios.get(url);

      const data: NASAAPiResponse = requestResult.data;
      const asteroids: ListingAsteroid[] = [];

      Object.keys(data.near_earth_objects).forEach((dateKey: string) => {
        asteroids.push(...data.near_earth_objects[dateKey]);
      });

      return {data: asteroids, nextURL: null, previousURL: null};
    } catch (e) {
      console.log(`error with third party dependency ${e}`);
      // TODO throw a better error
      throw {message: "could not connect to servers"};
    }
  }

  async getById(asteroidID: string): Promise<AsteroidDetails> {
    try {
      const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=DEMO_KEY`;
      console.log({url});
      const requestResult = await axios.get(url);
      const data: AsteroidDetails = requestResult.data;
      return data;

    } catch (e) {
      console.log({e})
      console.log(`error with third party dependency ${e}`);
      // TODO throw a better error
      throw {message: "could not connect to servers"};
    }
  }

}
