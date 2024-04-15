import { UploadedFile } from "express-fileupload";

export class FileUploadSingleRequest {
  private constructor(
    public file: UploadedFile,
    public folder: string,
    public validExtensions: string[],
  ) {}

  static create(object: { [key: string]: any }): [string?, FileUploadSingleRequest?] {
    const { file , folder = 'uploads', validExtensions = ['png', 'jpg', 'jpeg', 'gif'] } = object;
    if (!file) return ['File is required'];

    return [undefined, new FileUploadSingleRequest(file, folder, validExtensions)];
  }
}