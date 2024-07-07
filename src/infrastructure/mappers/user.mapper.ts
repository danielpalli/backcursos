import {CustomError, UserEntity} from "../../domain";

export class UserMapper {
  static objectToEntity(object: { [key: string] : any }): UserEntity {
    const { id, _id, firstName, lastName, email, password, phone, birthDate, country, role, isActive, avatar, lastConnection } = object;

    if (!id && !_id) throw CustomError.badRequest('Falta el id del usuario');
    if (!firstName) throw CustomError.badRequest('Falta el nombre');
    if (!lastName) throw CustomError.badRequest('Falta el apellido');
    if (!email) throw CustomError.badRequest('Falta el correo');
    if (!password) throw CustomError.badRequest('Falta la contraseña');
    if (!phone) throw CustomError.badRequest('Falta el teléfono');
    if (!birthDate) throw CustomError.badRequest('Falta la fecha de nacimiento');
    if (!country) throw CustomError.badRequest('Falta el país');
    if (!role) throw CustomError.badRequest('Falta el rol');
    if (!isActive) throw CustomError.badRequest('Falta el estado de activación');
    if (!avatar) throw CustomError.badRequest('Falta el avatar');
    if (!lastConnection) throw CustomError.badRequest('Falta la última conexión');

    return {
      id: id || _id,
      email,
      password,
      firstName,
      lastName,
      phone,
      birthDate,
      country,
      role,
      isActive,
      avatar,
      lastConnection,
    };
  }
  static objectsToEntities(objectList: { [key: string] : any }[]) : UserEntity[] {
    return objectList.map(this.objectToEntity);
  }
}
