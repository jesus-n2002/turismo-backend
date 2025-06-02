import { Router } from "express";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

export class CategoryRoutes{
    static get routes():Router{
        const router = Router();
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);
        
        router.get("/", controller.findAll);
        router.get("/:id", controller.findOne);
        router.post("/", controller.create);
        router.patch("/:id", controller.update);

        return router;
    }
}