import { Router } from "express";
import { TransportController } from "./transport.controller";
import { TransportService } from "./transport.service";

export class TransportRoutes{
    static get routes():Router{
        const router = Router();
        const transportService = new TransportService();
        const controller = new TransportController(transportService);
        
        router.get("/", controller.findAll);
        router.get("/:id", controller.findOne);
        router.post("/", controller.create);
        router.patch("/:id", controller.update);

        return router;
    }
}