import {CustomError, UserEntity} from "../../domain";

export class UserMapper {
  static dtoToEntity(object: { [key: string] : any }): UserEntity {
    const { id, _id, firstName, lastName, email, password, role, active, avatar } = object;
    if (!id && !_id) throw CustomError.badRequest('Missing id');

    if (!firstName) throw CustomError.badRequest('Missing first name');
    if (!lastName) throw CustomError.badRequest('Missing last name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (!password) throw CustomError.badRequest('Missing password');
    if (!role) throw CustomError.badRequest('Missing role');
    if (!active) throw CustomError.badRequest('Missing active');
    if (!avatar) throw CustomError.badRequest('Missing avatar');

    return {
      id: id || _id,
      email,
      password,
      firstName,
      lastName,
      role,
      active,
      avatar
    };
  }
  static dtosToEntities(objectList: { [key: string] : any }[]) : UserEntity[] {
    return objectList.map(this.dtoToEntity);
  }
}
