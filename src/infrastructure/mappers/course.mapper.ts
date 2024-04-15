import { CustomError } from "../../domain";

export class CourseMapper {
  static courseEntityFromObject(object: { [key: string] : any }) {
    const { id, _id, name, description, img, isActive, comissions = [] } = object;
    if (!id && !_id) throw CustomError.badRequest('Missing id');

    if (!name) throw CustomError.badRequest('Missing name');
    if (!description) throw CustomError.badRequest('Missing description');
    if (!img) throw CustomError.badRequest('Missing img');
    if (!isActive) throw CustomError.badRequest('Missing isActive');
    if (!comissions) throw CustomError.badRequest('Missing comissions');

    return {
      id: id || _id,
      name,
      description,
      img,
      isActive,
      comissions,
    };
  }

  static courseEntityListFromObjectList(objectList: { [key: string] : any }[]) {
    return objectList.map(this.courseEntityFromObject);
  }
}
