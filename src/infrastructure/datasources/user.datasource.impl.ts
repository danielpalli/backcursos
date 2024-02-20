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

      return UserMapper.userEntityFromObject(user as object);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.notFound('User not found');
    }
  }
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
