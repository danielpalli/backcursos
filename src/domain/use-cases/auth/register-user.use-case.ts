import { JwtAdapter } from "../../../config";
import { RegisterUserRequest } from "../../dtos/auth/register-user.request";
import { CustomError } from "../../errors/custom.error";
import { UserToken } from "../../interfaces/user-token.interface";
import { AuthRepository } from "../../repositories/auth.repository";

interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserRequest): Promise<UserToken>;
}

type SignToken = (payload: Object, expiresIn: string) => Promise<string|null>;

export class RegisterUser implements RegisterUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}
  
  async execute(registerUserDto: RegisterUserRequest): Promise<UserToken> {
    const user = await this.authRepository.register(registerUserDto)
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
