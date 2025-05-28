import { Request, Response } from "express";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Handler } from "../common/errors/handler.error";
import { Validators } from "../common/config/validators";

export class UserController {

    constructor(private readonly userService: UserService) { }

    create = async (req: Request, res: Response) => {
        const [error, createUserDTO] = CreateUserDTO.validate(req.body)
        if (error) {
            res.json({ error: error, statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.userService.create(createUserDTO!)
            .then((user) => res.json(user))
            .catch((err) => Handler.error(err, res))
    }
    findAll = (req: Request, res: Response) => {
        this.userService.findAll()
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    findOne = (req: Request, res: Response) => {
        if( !Validators.isMongotId(req.params.id) ){
            res.json({ error: "MongoID Invalid", statusCode: 400, statusMsg: "BAD_REQUEST" })
            return;
        }
        this.userService.findOne(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }

    remove = (req: Request, res: Response) => {
        this.userService.remove(req.params.id)
            .then((users) => res.json(users))
            .catch((err) => Handler.error(err, res))
    }
}