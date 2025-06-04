import { Router } from "express";
import { TouristsitesController } from "./tourist-sites.controller";
import { TouristSitesService } from "./tourist-sites.service";

export class TouristSitesRoutes{
    static get routes():Router{
        const router = Router();
        const touristSitesService = new TouristSitesService();
        const controller = new TouristsitesController(touristSitesService);
        
        router.get("/", controller.findAll);
        router.get("/:id", controller.findOne);
        router.post("/", controller.create);
        router.patch("/:id", controller.update);

        return router;
    }
}