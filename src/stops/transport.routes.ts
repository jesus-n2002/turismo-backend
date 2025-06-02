import { Router } from "express";
import { StopController } from "./transport.controller";
import { StopService } from "./stop.service";

export class StopRoutes{
    static get routes():Router{
        const router = Router();
        const stopService = new StopService();
        const controller = new StopController(stopService);
        
        router.get("/", controller.findAll);
        router.get("/:id", controller.findOne);
        router.post("/", controller.create);
        router.patch("/:id", controller.update);

        return router;
    }
}