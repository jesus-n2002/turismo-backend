import { UserModel } from "../common/data/mongodb/models/user.model";
import { ManagerError } from "../common/errors/manager.error";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { User } from "./entities/user.entity";

export class UserService{
    async create(  createUserDTO: CreateUserDTO  ){ 
        try {
            const create = await UserModel.create(createUserDTO);

            if(!create){
                throw ManagerError.conflict("User not created!")
            }

            await create.save();

            return create;
        } catch (error) {
            throw error
        }
    }

    async findAll(){
        try {
            const users = await UserModel.find();

            return users
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string){
        try {
            const user = await UserModel.findById(id);

            if(!user){
                throw ManagerError.badRequest("User not found!")
            }


            return user;
        } catch (error) {
            throw error
        }
    }

    async update(){
        return "update User";
    }

    async remove(id: string){
        return "remove User";
    }
}