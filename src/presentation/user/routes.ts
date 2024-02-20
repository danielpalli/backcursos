import { Router } from "express";
import { UserController } from "./controller";
import { UserDataSourceImpl, UserRepositoryImple } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new UserDataSourceImpl();
    const repository = new UserRepositoryImple(datasource);
    const controller = new UserController(repository);

    router.get('/', [AuthMiddleware.validateToken], controller.getUsers);
    router.get('/:id', controller.getUserById);

    return router;
  }
}