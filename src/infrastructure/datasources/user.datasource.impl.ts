import { JwtAdapter } from '../../config';
import { UserModel } from '../../data';
import {
  CustomError, SignToken,
  UpdateUserRequest,
  UserDataSource,
  UserEntity, UserToken,
} from '../../domain';
import { UserMapper } from '../mappers/user.mapper';

export class UserDataSourceImpl implements UserDataSource {

  constructor(
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find();
      return UserMapper.dtosToEntities(users);
    } catch (error: any) {
      throw CustomError.internalServer(error.message);
    }
  }

  async getUserById(id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findById(id);
      if (!user) throw CustomError.notFound('User not found');

      return UserMapper.dtoToEntity(user);
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.notFound('User not found');
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserRequest
  ): Promise<UserEntity> {
    try {
      const user = await UserModel.findByIdAndUpdate(id, updateUserDto, {
        new: true,
      });

      if (!user) throw CustomError.notFound('User not found');

      return UserMapper.dtoToEntity(user);
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

  async checkToken(user: UserEntity): Promise<UserToken> {

    try {
      const { id } = user;
  
      const token = await this.signToken({ id }, '2h');
      if (!token) throw CustomError.internalServer('Error generating token');
      
      return {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }
      }
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    } 
  }
}
