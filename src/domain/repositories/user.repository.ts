import { UserEntity } from '..';
import { UpdateUserDto } from '../dtos/user/update-user.dto';

export abstract class UserRepository {
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity>;
  abstract updateUser(id: string, user: UpdateUserDto): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<boolean>;
}
