import { CourseEntity, CourseRepository, PaginationDto } from '../..';

interface GetCoursesUseCase {
  execute(paginationDto: PaginationDto): Promise<CourseEntity[]>;
}

export class GetCourses implements GetCoursesUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(paginationDto: PaginationDto): Promise<CourseEntity[]> {
    const courses = await this.courseRepository.getCourses(paginationDto);
    return courses;
  }
}
