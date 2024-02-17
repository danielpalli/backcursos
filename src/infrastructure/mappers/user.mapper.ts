import { CustomError } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: { [key: string] : any }) {
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
      firstName,
      lastName,
      email,
      password,
      role,
      active,
      avatar
    };
  }
}