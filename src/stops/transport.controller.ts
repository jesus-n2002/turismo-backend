import { Request, Response } from "express";
import { StopService } from "./stop.service";
import { Handler } from "../common/errors/handler.error";
import { Validators } from "../common/config/validators";
import { CreateStopDTO } from "./dtos/create-stop.dto";
import { UpdateStopDTO } from "./dtos/update-transport.dto";

export class StopController {

    constructor(private readonly stopService: StopService) { }

    create = async (req: Request, res: Response) => {
        const [error, createStopDTO] = CreateStopDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.stopService.create(createStopDTO!)
            .then((user) => res.json(user))
            .catch((err) => Handler.error(err, res))
    }
    findAll = (req: Request, res: Response) => {
        this.stopService.findAll()
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    findOne = (req: Request, res: Response) => {
        if (!Validators.isMongotId(req.params.id)) {
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.stopService.findOne(req.params.id)
            .then((stops) => res.json(stops))
            .catch((err) => Handler.error(err, res))
    }

    update = (req: Request, res: Response) => {
        if (!Validators.isMongotId(req.params.id)) {
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        const [error, updateStopDTO] = UpdateStopDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.stopService.update(req.params.id, updateStopDTO!)
            .then((stops) => res.json(stops))
            .catch((err) => Handler.error(err, res))
    }

    remove = (req: Request, res: Response) => {
        this.stopService.remove(req.params.id)
            .then((stops) => res.json(stops))
            .catch((err) => Handler.error(err, res))
    }
}