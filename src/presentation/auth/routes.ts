import { Router } from 'express';
import { AuthController } from './controller';
import {AuthDataSourceImpl, AuthRepositoryImpl, UserDataSourceImpl, UserRepositoryImpl} from '../../infrastructure';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AuthDataSourceImpl();
    const repository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(repository);

    router.post('/login', controller.loginUser);
    router.post('/register', controller.registerUser);
    return router;
  }
}
