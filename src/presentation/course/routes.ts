import { Router } from 'express';
import { CourseController } from './controller';
import { CourseDataSourceImpl } from '../../infrastructure/datasources/course.datasource.impl';
import { CourseRepositoryImpl } from '../../infrastructure/repositories/course.repository.impl';

export class CourseRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new CourseDataSourceImpl();
    const repository = new CourseRepositoryImpl(datasource);
    const controller = new CourseController(repository);

    router.get('/', controller.getCourses);
    router.get('/:param', controller.getCoursesByName);
    router.post('/', controller.createCourse);
    router.put('/:id', controller.updateCourse);
    router.delete('/:id', controller.deleteCourse);

    return router;
  }
}
