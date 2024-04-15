import { CourseEntity, CreateCourseRequest, PaginationDto, UpdateCourseRequest } from "../";
export abstract class CourseRepository {
  abstract createCourse(createCourseDto: CreateCourseRequest): Promise<CourseEntity>;
  abstract getCourses(paginationDto: PaginationDto): any;
  abstract getCourseByName(name: string): Promise<CourseEntity>;
  abstract updateCourse(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity>;
  abstract deleteCourse(id: string): Promise<CourseEntity>;
}
