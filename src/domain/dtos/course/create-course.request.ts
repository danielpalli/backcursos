export class CreateCourseRequest {
  private constructor(public name: string, public description: string) {}

  static create(object: { [key: string]: any }): [string?, CreateCourseRequest?] {
    const { name, description } = object;

    if (!name) return ['Name is required'];
    if (!description) return ['description is required'];

    return [undefined, new CreateCourseRequest(name, description)];
  }
}
