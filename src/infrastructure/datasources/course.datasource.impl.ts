import { CourseModel } from '../../data';
import {
  CourseDataSource,
  CourseEntity,
  CreateCourseRequest,
  CustomError,
  PaginationDto, UpdateCourseRequest,
} from '../../domain';
import {CourseMapper} from "../mappers/course.mapper";

export class CourseDataSourceImpl implements CourseDataSource {
  async createCourse(createCourseDto: CreateCourseRequest): Promise<CourseEntity> {
    try {
      const courseExists = await CourseModel.findOne({
        name: createCourseDto.name,
      });
      if (courseExists) throw CustomError.badRequest('Course already exists');

      const course = await CourseModel.create({
        ...createCourseDto,
        isActive: true,
      });

      await course.save();

      return CourseMapper.courseEntityFromObject(course);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
  async getCourses(paginationDto: PaginationDto): Promise<CourseEntity[]> {
    const { page, limit } = paginationDto;

    try {
      const [total, courses] = await Promise.all([
        CourseModel.countDocuments(),
        CourseModel.find()
          .skip((page - 1) * limit)
          .limit(limit),
      ]);

      return CourseMapper.courseEntityListFromObjectList(courses);
    } catch (error: any) {
      throw CustomError.internalServer(error.message);
    }
  }

  getCourseByName(name: string): Promise<CourseEntity> {
    throw new Error('Method not implemented.');
  }

  async updateCourse(
    id: string,
    updateCourseDto: UpdateCourseRequest
  ): Promise<CourseEntity> {
    try {
      const course = await CourseModel.findByIdAndUpdate(id, updateCourseDto, {
        new: true,
      });

      if (!course) throw CustomError.notFound('Course not found');

      return CourseMapper.courseEntityFromObject(course);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }

  async deleteCourse(id: string): Promise<CourseEntity> {
    try {
      const course = await CourseModel.findByIdAndDelete(id);
      if (!course) throw CustomError.notFound('Course not found');
      return CourseMapper.courseEntityFromObject(course);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
}
