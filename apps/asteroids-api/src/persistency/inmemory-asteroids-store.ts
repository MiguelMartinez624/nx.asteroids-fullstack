import {AsteroidsStore} from "../core/services";
import {AsteroidDetails} from "@asteroids/asteroids";

export class InMemoryAsteroidsStore implements AsteroidsStore {
  private static ASTEROIDS_MAP: Map<string, AsteroidDetails> = new Map();


  saveAsteroid(asteroidID: string, asteroidDetails: AsteroidDetails): void {
    if (InMemoryAsteroidsStore.ASTEROIDS_MAP.get(asteroidID)) {
      throw {error: "asteroid already persistence", args: asteroidID};
    }

    InMemoryAsteroidsStore.ASTEROIDS_MAP.set(asteroidID, asteroidDetails);
  }

}
