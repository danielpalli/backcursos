import { Request, Response, Router } from "express";
import { UserController } from "./controller";
import { UserDataSourceImpl, UserRepositoryImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new UserDataSourceImpl();
    const repository = new UserRepositoryImpl(datasource);
    const controller = new UserController(repository);

    router.get('/check-token', AuthMiddleware.validateToken, controller.checkToken);

    router.get('/', AuthMiddleware.validateToken, controller.getUsers);
    router.get('/:id', AuthMiddleware.validateToken, controller.getUserById);
    router.put('/:id', AuthMiddleware.validateToken, controller.updateUser);
    router.delete('/:id', AuthMiddleware.validateToken, controller.deleteUser);

    return router;
  }
}
