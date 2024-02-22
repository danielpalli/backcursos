import { UpdateUserDto } from '../../dtos/user/update-user.dto';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

interface UpdateUserUseCase {
  execute(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.updateUser(id, updateUserDto);
    return user;
  }
}
