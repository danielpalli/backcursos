import { CourseEntity, CourseRepository, PaginationDto } from '../..';
interface GetCoursesUseCase {
  execute(paginationDto: PaginationDto): any;
}
export class GetCourses implements GetCoursesUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}
  async execute(paginationDto: PaginationDto) {
    return await this.courseRepository.getCourses(paginationDto);
  }
}
