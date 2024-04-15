import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export class ImageController {
  constructor() {}

  getImage = (request: Request, response: Response) => {
    const { type = '', img = '' } = request.params;
    const imagePath = path.join(__dirname, `../../../uploads/${type}/${img}`);

    if (!fs.existsSync(imagePath)) {
      return response.status(404).json({ message: 'Image not found' });
    }

    response.sendFile(imagePath);
  }
}