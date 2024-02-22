import { UserRepository } from '../../repositories/user.repository';

interface DeleteUserUseCase {
  execute(id: string): Promise<boolean>;
}

export class DeleteUser implements DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<boolean> {
    await this.userRepository.deleteUser(id);
    return true;
  }
}
