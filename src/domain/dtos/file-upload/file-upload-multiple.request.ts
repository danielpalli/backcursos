import { UploadedFile } from "express-fileupload";

export class FileUploadMultipleRequest {
  private constructor(
    public files: UploadedFile[],
    public folder: string,
    public validExtensions: string[],
  ) {}

  static create(object: { [key: string]: any }): [string?, FileUploadMultipleRequest?] {
    const { files , folder = 'uploads', validExtensions = ['png', 'jpg', 'jpeg', 'gif'] } = object;
    if (!files) return ['Files is required'];

    return [undefined, new FileUploadMultipleRequest(files, folder, validExtensions)];
  }
}