import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dtos/create-category.dto";
import { Handler } from "../common/errors/handler.error";
import { Validators } from "../common/config/validators";
import { UpdateCategoryDTO } from "./dtos/update-category.dto";

export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    create = async (req: Request, res: Response) => {
        const [error, createCategoryDTO] = CreateCategoryDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.categoryService.create(createCategoryDTO!)
            .then((user) => res.json(user))
            .catch((err) => Handler.error(err, res))
    }
    findAll = (req: Request, res: Response) => {
        this.categoryService.findAll()
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    findOne = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.categoryService.findOne(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    update = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        const [error, updateCategoryDTO] = UpdateCategoryDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.categoryService.update(req.params.id, updateCategoryDTO!)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    remove = (req: Request, res: Response) => {
        this.categoryService.remove(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }
}