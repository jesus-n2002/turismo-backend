import { Router } from "express";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

export class UserRoutes{
    static get routes():Router{
        const router = Router();
        const userService = new UserService();
        const controller = new UserController(userService);
        
        router.get("/", controller.findAll);
        router.get("/:id", controller.findOne);
        router.post("/", controller.create);

        return router;
    }
}