import { UserEntity } from '..';
import { UpdateUserDto } from '../dtos/user/update-user.dto';

export abstract class UserDataSource {
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity>;
  abstract updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<boolean>;
}
