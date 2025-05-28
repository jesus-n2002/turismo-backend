import { Response } from "express";
import { ManagerError } from "./manager.error";

export class Handler {
    static error(error: unknown, res: Response) {
        if (error instanceof ManagerError) {
            res.status(error.statusCode).json({ message: error.message, statusMsg: error.statusMsg, statusCode: error.statusCode, })
            return
        }

        res.status(500).json({ message: "INTERNAL_SERVER_ERROR", statusMsg: "INTERNAL_SERVER_ERROR", statusCode: 500, })
        return
    }
}