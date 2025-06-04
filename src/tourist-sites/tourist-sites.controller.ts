import { Request, Response } from "express";
import { TouristSitesService } from "./tourist-sites.service";
import { CreateTouristSitesDTO } from "./dtos/create-touristsites.dto";
import { Handler } from "../common/errors/handler.error";
import { Validators } from "../common/config/validators";
import { UpdateTouristsitesDTO } from "./dtos/update-category.dto";

export class TouristsitesController {

    constructor(private readonly touristSitesService:TouristSitesService) { }

    create = async (req: Request, res: Response) => {
        const [error, createTouristSitesDTO] = CreateTouristSitesDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.touristSitesService.create(createTouristSitesDTO!)
            .then((user) => res.json(user))
            .catch((err) => Handler.error(err, res))
    }
    findAll = (req: Request, res: Response) => {
        this.touristSitesService.findAll()
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    findOne = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.touristSitesService.findOne(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    update = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        const [error, updateCategoryDTO] = UpdateTouristsitesDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.touristSitesService.update(req.params.id, updateCategoryDTO!)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    remove = (req: Request, res: Response) => {
        this.touristSitesService.remove(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }
}