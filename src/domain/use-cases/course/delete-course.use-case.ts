import { CourseRepository } from '../../repositories/course.repository';
interface DeleteCourseUseCase {
  execute(id: string): Promise<boolean>;
}
export class DeleteCourse implements DeleteCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}
  async execute(id: string): Promise<boolean> {
    await this.courseRepository.deleteCourse(id);
    return true;
  }
}
