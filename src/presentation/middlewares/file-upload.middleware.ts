import { NextFunction, Request, Response } from "express";

export class FileUploadMiddleware {
  static containFiles = (request: Request, response: Response, next: NextFunction) => {
    if (!request.files || Object.keys(request.files).length === 0) {
      return response.status(400).json({ message: 'No files were uploaded' });
    }

    if (!Array.isArray(request.files.file)) {
      request.body.files = [request.files.file];
    } else {
      request.body.files = request.files.file;
    }

    next();
  }
}