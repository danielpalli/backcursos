import { CustomError } from "../../domain";

export class CourseMapper {
  static courseEntityFromObject(object: { [key: string] : any }) {
    const { id, _id, name, description, isActive } = object;
    if (!id && !_id) throw CustomError.badRequest('Missing id');

    if (!name) throw CustomError.badRequest('Missing name');
    if (!description) throw CustomError.badRequest('Missing description');
    if (!isActive) throw CustomError.badRequest('Missing isActive');


    return {
      id: id || _id,
      name,
      description,
      isActive
    };
  }

  static courseEntityListFromObjectList(objectList: { [key: string] : any }[]) {
    return objectList.map(this.courseEntityFromObject);
  }
}