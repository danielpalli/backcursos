import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data";

export class AuthMiddleware {
  static validateToken = async (request: Request, response: Response, next: NextFunction) => {
    const authorization = request.header('Authorization');
    
    if (!authorization) return response.status(401).json({ message: 'Unauthorized' });
    if (!authorization.startsWith('Bearer')) return response.status(401).json({ message: 'Unauthorized' });

    const token = authorization.split(' ').at(1) || '';
    
    try {
      const payload = await JwtAdapter.validateToken<{id: string}>(token);
      
      if (!payload) return response.status(401).json({ message: 'Unauthorized' });

      const user = await UserModel.findById(payload.id);

      if (!user) return response.status(401).json({ message: 'Unauthorized' });
      if (!user.active) return response.status(401).json({ message: 'Unauthorized' });

      request.body.user = user;

      next();
    } catch (error) {
      response.status(500).json({ message: 'Internal server error' });
    }
  }
}