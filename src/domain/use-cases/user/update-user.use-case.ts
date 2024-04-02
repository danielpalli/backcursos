import { UpdateUserRequest } from '../../dtos/user/update-user.request';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

interface UpdateUserUseCase {
  execute(id: string, updateUserDto: UpdateUserRequest): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, updateUserDto: UpdateUserRequest): Promise<UserEntity> {
    const user = await this.userRepository.updateUser(id, updateUserDto);
    return user;
  }
}
