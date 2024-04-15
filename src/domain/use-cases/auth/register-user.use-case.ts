import { AuthRepository, CustomError, RegisterUserRequest, SignToken, UserToken } from "../../";
import { JwtAdapter } from "../../../config";
interface RegisterUserUseCase {
	execute(registerUserDto: RegisterUserRequest): Promise<UserToken>;
}

export class RegisterUser implements RegisterUserUseCase {
	constructor(
		private readonly authRepository: AuthRepository,
		private readonly signToken: SignToken = JwtAdapter.generateToken,
	) {}
	async execute(registerUserDto: RegisterUserRequest): Promise<UserToken> {
		const { password, ...user } = await this.authRepository.register(registerUserDto)
		const token = await this.signToken({ id: user.id }, '2h');

		if (!token) throw CustomError.internalServer('Error generating token');

		return {
			token,
			user
		}
	}


}
