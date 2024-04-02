export class UpdateCourseRequest {
  private constructor(public name: string, public description: string, public isActive: boolean) {}

  static create(object: { [key: string]: any }): [string?, UpdateCourseRequest?] {
    const { name, description, isActive } = object;

    if (!name) return ['Name is required'];
    if (!description) return ['Description is required'];
    if (isActive === undefined) return ['Status is required'];

    return [undefined, new UpdateCourseRequest(name, description, isActive)];
  }
}
