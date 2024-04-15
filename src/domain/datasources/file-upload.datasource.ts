import { FileUploadMultipleRequest, FileUploadSingleRequest } from "../";

export abstract class FileUploadDataSource {
  abstract uploadSingle(fileUploadSingleRequest: FileUploadSingleRequest): any;
  abstract uploadMultiple(flieUploadMultipleRequest: FileUploadMultipleRequest): any;
}
