export class UpdateCourseRequest {
  private constructor(public name: string, public description: string, public img: string, public isActive: boolean, public comissions: string[] = []) {}

  static create(object: { [key: string]: any }): [string?, UpdateCourseRequest?] {
    const { name, description, img, isActive, comissions} = object;

    if (!name) return ['Name is required'];
    if (!description) return ['Description is required'];
    if (!img) return ['Image is required'];
    if (isActive === undefined) return ['Status is required'];
    if (!comissions) return ['Comissions is required'];

    return [undefined, new UpdateCourseRequest(name, description, img, isActive, comissions)];
  }
}
