import { Router } from 'express';
import { CourseController } from './controller';
import { CourseDataSourceImpl } from '../../infrastructure';
import { CourseRepositoryImpl } from '../../infrastructure';
import {AuthMiddleware} from "../middlewares/auth.middleware";
export class CourseRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new CourseDataSourceImpl();
    const repository = new CourseRepositoryImpl(datasource);
    const controller = new CourseController(repository);

    router.use(AuthMiddleware.validateToken);

    router.get('/', controller.getCourses);
    router.get('/:param', controller.getCoursesByName);
    router.post('/', controller.createCourse);
    router.put('/:id', controller.updateCourse);
    router.delete('/:id', controller.deleteCourse);

    return router;
  }
}
