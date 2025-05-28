import { Router } from "express";
import { UserRoutes } from "./user/user.routes";

export class RoutesApp {
    static get routes(): Router{
        const router = Router();

        
        router.use("/users", UserRoutes.routes)
        
        return router;

    }
}