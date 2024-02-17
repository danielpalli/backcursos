import { RegisterUserDto, LoginUserDto, UserEntity } from '..';

export abstract class AuthDataSource {
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;
}

