import { UpdateUserRequest, UserEntity, UserToken } from '..';

export abstract class UserRepository {
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity>;
  abstract updateUser(id: string, updateUserDto: UpdateUserRequest): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<boolean>;
  abstract checkToken(user: UserEntity): Promise<UserToken>;
}
