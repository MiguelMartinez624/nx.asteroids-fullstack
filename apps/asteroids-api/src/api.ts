import express, {Router} from "express";
import path from "path";
import {HttpAsteroidsGateway} from "./gateways/http-asteroids-gateway";

export class AsteroidsAPI {


  public run() {
    const app = express();

    app.use('/assets', express.static(path.join(__dirname, 'assets')));



    const router = Router();
    app.use("/api", router);
    new HttpAsteroidsGateway(router);

    const port = process.env.PORT || 3333;
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);

  }
}
