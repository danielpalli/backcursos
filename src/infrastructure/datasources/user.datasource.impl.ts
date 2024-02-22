import { UserModel } from '../../data';
import {
  CustomError,
  UpdateUserDto,
  UserDataSource,
  UserEntity,
} from '../../domain';
import { UserMapper } from '../mappers/user.mapper';

export class UserDataSourceImpl implements UserDataSource {
  async getUsers(): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find();
      return UserMapper.userEntityListFromObjectList(users);
    } catch (error: any) {
      throw CustomError.internalServer(error.message);
    }
  }

  async getUserById(id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findById(id);
      if (!user) throw CustomError.notFound('User not found');

      return UserMapper.userEntityFromObject(user);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.notFound('User not found');
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    try {
      const user = await UserModel.findByIdAndUpdate(id, updateUserDto, {
        new: true,
      });

      if (!user) throw CustomError.notFound('User not found');

      return UserMapper.userEntityFromObject(user);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
  
  async deleteUser(id: string): Promise<boolean> {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) throw CustomError.notFound('User not found');
      return true;
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
}
