import { Request, Response } from 'express';
import { CustomError, FileUploadMultipleRequest, FileUploadRepository, FileUploadSingleRequest, UploadMultiple, UploadSingle } from '../../domain';

export class FileUploadController {
  constructor(private readonly fileUploadRepository: FileUploadRepository) {}

  uploadFile = (request: Request, response: Response) => {
    const [error, fileUploadSingleRequest] = FileUploadSingleRequest.create({
      file: request.body.files.at(0),
      folder: `uploads/${request.params.type}`,
    });
    
    if (error) return CustomError.handleError(error, response);

    new UploadSingle(this.fileUploadRepository)
      .execute(fileUploadSingleRequest!)
      .then((data) => response.status(201).json(data))
      .catch((error) => CustomError.handleError(error, response));
  };
  
  uploadMultipleFiles = (request: Request, response: Response) => {
    const [error, fileUploadMultipleRequest] = FileUploadMultipleRequest.create({
      files: request.body.files,
      folder: `uploads/${request.params.type}`,
    });

    if (error) return CustomError.handleError(error, response);
    
    new UploadMultiple(this.fileUploadRepository)
      .execute(fileUploadMultipleRequest!)
      .then((data) => response.status(201).json(data))
      .catch((error) => CustomError.handleError(error, response));
  }
}