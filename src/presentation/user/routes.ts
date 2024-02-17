import { Router } from "express";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    router.post('/', () => {});

    return router;
  }
}