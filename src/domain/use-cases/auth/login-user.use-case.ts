import { JwtAdapter } from "../../../config";
import { LoginUserRequest } from "../../dtos/auth/login-user.request";

import { CustomError } from "../../errors/custom.error";
import { UserToken } from "../../interfaces/user-token.interface";
import { AuthRepository } from "../../repositories/auth.repository";

interface LoginUserUseCase {
  execute(loginUserDto: LoginUserRequest): Promise<UserToken>;
}

type SignToken = (payload: Object, expiresIn: string) => Promise<string|null>;

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}
  
  async execute(loginUserDto: LoginUserRequest): Promise<UserToken> {
    const user = await this.authRepository.login(loginUserDto);
    
    const token = await this.signToken({ id: user.id }, '2h' );
    if (!token) throw CustomError.internalServer('Error generating token');

    return {
      token: token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      }
    }
  }
}
