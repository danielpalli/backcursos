import { Router } from 'express';
import { FileUploadController } from './controller';
import { FileUploadRepositoryImpl } from '../../infrastructure/repositories/file-upload.repository.imple';
import { FileUploadDataSourceImpl } from '../../infrastructure/datasources/file-upload.datasource.impl';
import { FileUploadMiddleware } from '../middlewares/file-upload.middleware';
import { TypeMiddleware } from '../middlewares/type.middleware';

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new FileUploadDataSourceImpl();
    const repository = new FileUploadRepositoryImpl(datasource);
    const controller = new FileUploadController(repository);

    router.use(FileUploadMiddleware.containFiles);
    router.use(TypeMiddleware.validateTypes(['users', 'courses']));
    router.post('/single/:type', controller.uploadFile);
    router.post('/multiple/:type', controller.uploadMultipleFiles);

    return router;
  }
}
