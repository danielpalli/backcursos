import {
  FileUploadDataSource,
  FileUploadMultipleRequest,
  FileUploadRepository,
  FileUploadSingleRequest,
} from '../../domain';

export class FileUploadRepositoryImpl implements FileUploadRepository {
  constructor(private readonly fileUploadDataSource: FileUploadDataSource) {}

  uploadSingle(fileUploadSingleRequest: FileUploadSingleRequest) {
    return this.fileUploadDataSource.uploadSingle(fileUploadSingleRequest);
  }
  uploadMultiple(fileUploadMultipleRequest: FileUploadMultipleRequest) {
    return this.fileUploadDataSource.uploadMultiple(fileUploadMultipleRequest);
  }
}
