import { AuthDataSource, AuthRepository, LoginUserRequest, RegisterUserRequest, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  register(registerUserDto: RegisterUserRequest): Promise<UserEntity> {
    return this.authDataSource.register(registerUserDto);
  }

  login(loginUserDto: LoginUserRequest): Promise<UserEntity> {
    return this.authDataSource.login(loginUserDto);
  }

}
