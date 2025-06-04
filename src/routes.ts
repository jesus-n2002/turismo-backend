import { Router } from "express";
import { UserRoutes } from "./user/user.routes";
import { CategoryRoutes } from "./category/category.routes";
import { TransportRoutes } from "./transport/transport.routes";
import { StopRoutes } from "./stops/transport.routes";
import { TouristSitesRoutes } from "./tourist-sites/tourist-sites.routes";

export class RoutesApp {
    static get routes(): Router{
        const router = Router();

        router.use("/users", UserRoutes.routes)
        router.use("/categories", CategoryRoutes.routes)
        router.use("/transports", TransportRoutes.routes)
        router.use("/stops", StopRoutes.routes)
        router.use("/tourist-sites", TouristSitesRoutes.routes)
        
        return router;
    }
}