import { FileUploadRepository, FileUploadSingleRequest } from "../../";

interface UploadSingleUseCase {
  execute(fileUploadRequest: FileUploadSingleRequest): any;
}
export class UploadSingle implements UploadSingleUseCase {
  constructor(private readonly fileUploadRepository: FileUploadRepository) {}
  async execute(fileUploadRequest: FileUploadSingleRequest) {
    const file = fileUploadRequest.file;

    if (!file || Object.keys(file).length === 0) {
      throw new Error('File not found');
    }

    return await this.fileUploadRepository.uploadSingle(fileUploadRequest);
  }
}
