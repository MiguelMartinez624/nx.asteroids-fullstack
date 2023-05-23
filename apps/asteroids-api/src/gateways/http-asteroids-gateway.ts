import {Request, Response, Router} from "express";
import {APIAddToFavorite, APIFetchAsteroidsList, APIRemoveFromFavorite} from "../core/use_cases";
import {NasaAsteroidsService} from "../clients/nasa-asteroids-service";
import {InMemoryAsteroidsStore} from "../persistency/inmemory-asteroids-store";

export class HttpAsteroidsGateway {
  constructor(router: Router) {

    router.get("/asteroids", this.fetchAsteroidsList);
    router.post("/asteroids/:asteroidId", this.addToFavorite)
    router.post("/asteroids/:asteroidId/remove", this.removeFromFavorites)

  }


  public async fetchAsteroidsList(req: Request, res: Response) {
    try {
      const useCase = new APIFetchAsteroidsList(new NasaAsteroidsService());
      const result = await useCase.execute({
        startDate: new Date(req.query['start_date'] as string),
        endDate: new Date(req.query['end_date'] as string)
      });

      res.send(result);
    } catch (e) {
      res.status(400).send({message: "something when wrong"});
    }

  }

  public async addToFavorite(req: Request, res: Response) {
    try {
      const useCase = new APIAddToFavorite(new NasaAsteroidsService(), new InMemoryAsteroidsStore());
      const result = await useCase.execute(req.params['asteroidId']);

      res.send(result);
    } catch (e) {
      res.status(400).send({message: "something when wrong", error: e});
    }

  }



  public async removeFromFavorites(req: Request, res: Response) {
    try {
      const useCase = new APIRemoveFromFavorite(new NasaAsteroidsService(), new InMemoryAsteroidsStore());
      const result = await useCase.execute(req.params['asteroidId']);

      res.send(result);
    } catch (e) {
      res.status(400).send({message: "something when wrong", error: e});
    }

  }

}
