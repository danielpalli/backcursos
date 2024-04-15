import { AuthRepository, CustomError, LoginUserRequest, SignToken, UserToken } from "../../";
import { JwtAdapter } from "../../../config";
interface LoginUserUseCase {
	execute(loginUserDto: LoginUserRequest): Promise<UserToken>;
}
export class LoginUser implements LoginUserUseCase {
	constructor(
		private readonly authRepository: AuthRepository,
		private readonly signToken: SignToken = JwtAdapter.generateToken,
	) {}
	async execute(loginUserDto: LoginUserRequest): Promise<UserToken> {
		const { password, ...user } = await this.authRepository.login(loginUserDto);
		const token = await this.signToken({ id: user.id }, '2h');

		if (!token) throw CustomError.internalServer('Error generating token');

		return {
			token,
			user
		};
	}
}
