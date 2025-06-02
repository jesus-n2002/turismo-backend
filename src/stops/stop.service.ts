import { StopModel } from "../common/data/mongodb/models/stop.model";
import { TransportModel } from "../common/data/mongodb/models/transport.model";
import { ManagerError } from "../common/errors/manager.error";
import { CreateStopDTO } from "./dtos/create-stop.dto";
import { UpdateStopDTO } from "./dtos/update-transport.dto";

export class StopService {
    async create(createStopDTO: CreateStopDTO) {
        try {
            const create = await StopModel.create(createStopDTO);

            if (!create) {
                throw ManagerError.conflict("Stop not created!");
            }

            await create.save();

            return create;
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        try {
            const stops = await StopModel.find();

            return stops
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const stop = await StopModel.findById(id);

            if (!stop) {
                throw ManagerError.badRequest("Stop not found!")
            }


            return stop;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, updateStopDTO: UpdateStopDTO) {
        try {
            const update = await StopModel.findByIdAndUpdate(id, updateStopDTO, { new: true });
            if (!update) {
                throw ManagerError.notFound("Stop not found!");
            }
            return update;
        } catch (error) {
            throw error
        }
    }

    async remove(id: string) {
        return "remove User";
    }
}