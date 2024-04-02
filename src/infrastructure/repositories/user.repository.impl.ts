import { UserRepository, UserEntity, UserDataSource } from "../../domain";
import { UpdateUserRequest } from "../../domain/dtos/user/update-user.request";
import { UserToken } from "../../domain/interfaces/user-token.interface";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}
  getUsers(): Promise<UserEntity[]> {
    return this.userDataSource.getUsers();
  }
  getUserById(id: string): Promise<UserEntity> {
    return this.userDataSource.getUserById(id);
  }
  updateUser(id: string, user: UpdateUserRequest): Promise<UserEntity> {
    return this.userDataSource.updateUser(id, user);
  }
  deleteUser(id: string): Promise<boolean> {
    return this.userDataSource.deleteUser(id);
  }
  checkToken(user: UserEntity): Promise<UserToken> {
    console.log("test");
    return this.userDataSource.checkToken(user);
  }
}
