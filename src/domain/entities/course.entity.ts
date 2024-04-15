export class CourseEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public img: string,
    public isActive: boolean,
    public comissions: string[],
  ) {}
}
