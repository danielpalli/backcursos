import { CourseEntity, CreateCourseRequest, PaginationDto } from "../";
import { UpdateCourseRequest } from "../dtos/course/update-course.request";

export abstract class CourseDataSource {
  abstract createCourse(createCourseDto: CreateCourseRequest): Promise<CourseEntity>;
  abstract getCourses(pagination: PaginationDto): Promise<CourseEntity[]>;
  abstract getCourseByName(name: string): Promise<CourseEntity>;
  abstract updateCourse(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity>;
  abstract deleteCourse(id: string): Promise<CourseEntity>;
}
