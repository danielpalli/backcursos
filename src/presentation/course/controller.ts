import { Request, Response } from 'express';
import {
  CourseRepository,
  CreateCourse,
  CreateCourseRequest,
  CustomError,
  DeleteCourse,
  GetCourses,
  PaginationDto,
  UpdateCourse,
} from '../../domain';

export class CourseController {
  constructor(private readonly courseRepository: CourseRepository) {}

  getCourses = (request: Request, response: Response) => {
    const { page = 1, limit = 10 } = request.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return response.status(400).json({ error });

    new GetCourses(this.courseRepository)
      .execute(paginationDto!)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  getCoursesByName = (request: Request, response: Response) => {};

  createCourse = (request: Request, response: Response) => {
    const [error, createCourseDto] = CreateCourseRequest.create(request.body);
    if (error) return response.status(400).json({ error });

    new CreateCourse(this.courseRepository)
      .execute(createCourseDto!)
      .then((data) => response.status(201).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  updateCourse = (request: Request, response: Response) => {
    new UpdateCourse(this.courseRepository)
      .execute(request.params.id, request.body)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };

  deleteCourse = (request: Request, response: Response) => {
    new DeleteCourse(this.courseRepository)
      .execute(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
}
