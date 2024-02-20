import { UserRepository, UserEntity, UserDataSource } from "../../domain";
import { UpdateUserDto } from "../../domain/dtos/user/update-user.dto";

export class UserRepositoryImple implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}
  getUsers(): Promise<UserEntity[]> {
    return this.userDataSource.getUsers();
  }
  getUserById(id: string): Promise<UserEntity> {
    return this.userDataSource.getUserById(id);
  }
  updateUser(id: string, user: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}