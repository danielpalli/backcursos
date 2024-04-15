import { NextFunction, Request, Response } from "express";

export class TypeMiddleware {

  static validateTypes = (validTypes: string[]) => {
    return (request: Request, response: Response, next: NextFunction) => {
      const type = request.url.split('/')[2] ?? '';
    
      if (!validTypes.includes(type)) {
        return response.status(400).json({ message: 'Invalid type' });
      }

      next();
    }
  }
}