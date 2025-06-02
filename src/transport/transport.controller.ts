import { Request, Response } from "express";
import { TransportService } from "./transport.service";
import { CreateTransportDTO } from "./dtos/create-transport.dto";
import { Handler } from "../common/errors/handler.error";
import { Validators } from "../common/config/validators";
import { UpdateTransportDTO } from "./dtos/update-transport.dto";

export class TransportController {

    constructor(private readonly transportService: TransportService) { }

    create = async (req: Request, res: Response) => {
        const [error, creatTransportDTO] = CreateTransportDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.transportService.create(creatTransportDTO!)
            .then((user) => res.json(user))
            .catch((err) => Handler.error(err, res))
    }
    findAll = (req: Request, res: Response) => {
        this.transportService.findAll()
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    findOne = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.transportService.findOne(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    update = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        const [error, updateTransportDTO] = UpdateTransportDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.transportService.update(req.params.id, updateTransportDTO!)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    remove = (req: Request, res: Response) => {
        this.transportService.remove(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }
}