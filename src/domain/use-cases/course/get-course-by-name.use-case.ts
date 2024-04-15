import { CourseEntity, CourseRepository, PaginationDto } from '../..';
interface GetCourseByNameUseCase {
  execute(name: string): Promise<CourseEntity>;
}
export class GetCourse implements GetCourseByNameUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}
  async execute(name: string): Promise<CourseEntity> {
    return await this.courseRepository.getCourseByName(name);
  }
}
