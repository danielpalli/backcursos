import { Router } from 'express';
import { AuthRoutes, CourseRoutes, UserRoutes } from './';
import {FileUploadRoutes} from "./file-upload/routes";
import { ImageRoutes } from './images/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/user', UserRoutes.routes);
    router.use('/api/course', CourseRoutes.routes);
    router.use('/api/upload', FileUploadRoutes.routes);
    router.use('/api/images', ImageRoutes.routes)
    
    return router;
  }
}
