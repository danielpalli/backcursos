import { UpdateCourseRequest } from '../../dtos/course/update-course.request';
import { CourseEntity } from '../../entities/course.entity';
import { CourseRepository } from '../../repositories/course.repository';

interface UpdateCourseUseCase {
  execute(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity>;
}

export class UpdateCourse implements UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity> {
    const user = await this.courseRepository.updateCourse(id, updateCourseDto);
    return user;
  }
}
