import { FileUploadMultipleRequest } from "../dtos/file-upload/file-upload-multiple.request";
import { FileUploadSingleRequest } from "../dtos/file-upload/file-upload-single.request";

export abstract class FileUploadRepository {
  abstract uploadSingle(fileUploadSingleRequest: FileUploadSingleRequest): any;
  abstract uploadMultiple(flieUploadMultipleRequest: FileUploadMultipleRequest): any;
}
