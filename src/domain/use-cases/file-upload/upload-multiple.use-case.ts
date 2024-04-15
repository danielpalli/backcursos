import { FileUploadMultipleRequest, FileUploadRepository } from "../../";

interface UploadMultipleUseCase {
  execute(fileUploadMultipleRequest: FileUploadMultipleRequest): any;
}
export class UploadMultiple implements UploadMultipleUseCase {
  constructor(private readonly fileUploadRepository: FileUploadRepository) {}
  async execute(fileUploadMultipleRequest: FileUploadMultipleRequest) {
    const files = fileUploadMultipleRequest.files;

    if (!files || Object.keys(files).length === 0) {
      throw new Error('File not found');
    }

    return await this.fileUploadRepository.uploadMultiple(fileUploadMultipleRequest);
  }
}
