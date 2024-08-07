import { CourseDataSource, CourseEntity, CourseRepository, CreateCourseRequest, PaginationDto } from "../../domain";
import { UpdateCourseRequest } from "../../domain/dtos/course/update-course.request";

export class CourseRepositoryImpl implements CourseRepository {
  constructor(private readonly courseDataSource: CourseDataSource) {}
  
  createCourse(createCourseDto: CreateCourseRequest): Promise<CourseEntity> {
    return this.courseDataSource.createCourse(createCourseDto);
  }
  getCourses(paginationDto: PaginationDto) {
    return this.courseDataSource.getCourses(paginationDto);
  }
  getCourseByName(name: string): Promise<CourseEntity> {
    return this.courseDataSource.getCourseByName(name);
  }

  updateCourse(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity> {
    return this.courseDataSource.updateCourse(id, updateCourseDto);
  }
  
  deleteCourse(id: string): Promise<CourseEntity> {
    return this.courseDataSource.deleteCourse(id);
  }

}
