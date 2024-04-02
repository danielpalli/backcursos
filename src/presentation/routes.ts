import { Router } from 'express';
import { AuthRoutes, CourseRoutes, UserRoutes } from './';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/user', UserRoutes.routes);
    router.use('/api/course', CourseRoutes.routes);
    
    return router;
  }
}
