import { RegisterUserRequest, LoginUserRequest, UserEntity } from '..';
export abstract class AuthRepository {
  abstract register(registerUserDto: RegisterUserRequest): Promise<UserEntity>;
  abstract login(loginUserDto: LoginUserRequest): Promise<UserEntity>;
}
