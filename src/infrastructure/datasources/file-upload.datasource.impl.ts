import path from 'path'; 
import fs from 'fs';
import { CustomError, FileUploadDataSource, FileUploadMultipleRequest, FileUploadSingleRequest } from '../../domain';
import { UuidAdapter } from '../../config';

export class FileUploadDataSourceImpl implements FileUploadDataSource {
  constructor(private readonly uuid = UuidAdapter.generate) {}

  private checkFolder(folderPath: string) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  }

  async uploadSingle(fileUploadSingleRequest: FileUploadSingleRequest) {
    try {
      const { file, folder, validExtensions } = fileUploadSingleRequest;
      const fileExtension = file.mimetype.split('/').at(1)  ?? '';

      if (!validExtensions.includes(fileExtension)) throw CustomError.badRequest('Invalid file extension');
      const destination = path.resolve(__dirname, '../../../', folder);

      this.checkFolder(destination);

      const fileName = `${this.uuid()}.${fileExtension}`;

      file.mv(`${destination}/${fileName}`);

      return { fileName };
      
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
  async uploadMultiple(fileUploadMultipleRequest: FileUploadMultipleRequest) {
    try {
      const { files, folder, validExtensions } = fileUploadMultipleRequest;	

      const fileData = await Promise.all(
        files.map(file => this.uploadSingle({file, folder, validExtensions}))
      );

      return fileData;
    } catch (error: any) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer(error.message);
    }
  }
}
