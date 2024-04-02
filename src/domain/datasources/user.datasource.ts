import { UserEntity } from '..';
import { UpdateUserRequest } from '../dtos/user/update-user.request';
import { UserToken } from '../interfaces/user-token.interface';

export abstract class UserDataSource {
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity>;
  abstract updateUser(id: string, updateUserDto: UpdateUserRequest): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<boolean>;
  abstract checkToken(user: UserEntity): Promise<UserToken>;
}
