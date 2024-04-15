import { CourseEntity, CourseRepository, CreateCourseRequest } from '../../';
interface CreateCourseUseCase {
  execute(createCourseDto: CreateCourseRequest): Promise<CourseEntity>;
}
export class CreateCourse implements CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}
  async execute(createCourseDto: CreateCourseRequest): Promise<CourseEntity> {
    return await this.courseRepository.createCourse(createCourseDto);
  }
}
