import { TransportModel } from "../common/data/mongodb/models/transport.model";
import { ManagerError } from "../common/errors/manager.error";
import { CreateTransportDTO } from "./dtos/create-transport.dto";
import { UpdateTransportDTO } from "./dtos/update-transport.dto";

export class TransportService {
    async create(createTransportDTO: CreateTransportDTO) {
        try {
            const create = await TransportModel.create(createTransportDTO);

            if (!create) {
                throw ManagerError.conflict("Transport not created!");
            }

            await create.save();

            return create;
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        try {
            const users = await TransportModel.find().populate("stops");

            return users
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const transport = await TransportModel.findById(id);

            if (!transport) {
                throw ManagerError.badRequest("Transport not found!")
            }


            return transport;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, updateTransportDTO: UpdateTransportDTO) {
        try {
            const update = await TransportModel.findByIdAndUpdate(id, updateTransportDTO, { new: true });
            if (!update) {
                throw ManagerError.notFound("Transport not found!");
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