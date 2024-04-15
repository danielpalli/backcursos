import { CourseEntity, CourseRepository, UpdateCourseRequest } from "../../";
interface UpdateCourseUseCase {
  execute(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity>;
}
export class UpdateCourse implements UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}
  async execute(id: string, updateCourseDto: UpdateCourseRequest): Promise<CourseEntity> {
    return await this.courseRepository.updateCourse(id, updateCourseDto);
  }
}
