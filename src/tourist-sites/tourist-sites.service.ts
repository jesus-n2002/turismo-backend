import { TouristSitesModel } from "../common/data/mongodb/models/tourist-sites.model";
import { ManagerError } from "../common/errors/manager.error";
import { CreateTouristSitesDTO } from "./dtos/create-touristsites.dto";
import { UpdateTouristsitesDTO } from "./dtos/update-category.dto";

export class TouristSitesService{
    async create(  createTouristsitesDTO: CreateTouristSitesDTO  ){ 
        try {
            const create = await TouristSitesModel.create(CreateTouristSitesDTO);

            if(!create){
                throw ManagerError.conflict("Touristsites not created!")
            }

            await create.save();

            return create;
        } catch (error) {
            throw error
        }
    }

    async findAll(){
        try {
            const users = await TouristSitesModel .find();

            return users
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string){
        try {
            const user = await TouristSitesModel .findById(id);

            if(!user){
                throw ManagerError.badRequest("Touristsites not found!")
            }


            return user;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, UpdateTouristsitesDTO: UpdateTouristsitesDTO){
        try {
            const update = await TouristSitesModel .findByIdAndUpdate(id, UpdateTouristsitesDTO, { new: true });
            if(!update){
                throw ManagerError.notFound("Touristsites not found!");
            }
            return update;
        } catch (error) {
            throw error
        }
    }

    async remove(id: string){
        return "remove User";
    }
}