import { Router} from "express";
import {UserController} from "./controller";
import {UserDataSourceImpl, UserRepositoryImpl} from "../../infrastructure";
import {AuthMiddleware} from "../middlewares/auth.middleware";

export class UserRoutes {
	static get routes(): Router {
		const router = Router();
		const datasource = new UserDataSourceImpl();
		const repository = new UserRepositoryImpl(datasource);
		const controller = new UserController(repository);


		router.use(AuthMiddleware.validateToken);
		router.get('/check-token', controller.checkToken);
		router.get('/:id', controller.getUserById);
		router.get('/', controller.getUsers);
		router.put('/:id', controller.updateUser);
		router.delete('/:id', controller.deleteUser);

		return router;
	}
}
