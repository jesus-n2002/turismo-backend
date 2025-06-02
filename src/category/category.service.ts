import { CategoryModel } from "../common/data/mongodb/models/category.model";
import { ManagerError } from "../common/errors/manager.error";
import { CreateCategoryDTO } from "./dtos/create-category.dto";
import { UpdateCategoryDTO } from "./dtos/update-category.dto";

export class CategoryService{
    async create(  createCategoryDTO: CreateCategoryDTO  ){ 
        try {
            const create = await CategoryModel.create(createCategoryDTO);

            if(!create){
                throw ManagerError.conflict("Category not created!")
            }

            await create.save();

            return create;
        } catch (error) {
            throw error
        }
    }

    async findAll(){
        try {
            const users = await CategoryModel.find();

            return users
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string){
        try {
            const user = await CategoryModel.findById(id);

            if(!user){
                throw ManagerError.badRequest("User not found!")
            }


            return user;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, updateCategoryDTO: UpdateCategoryDTO){
        try {
            const update = await CategoryModel.findByIdAndUpdate(id, updateCategoryDTO, { new: true });
            if(!update){
                throw ManagerError.notFound("Category not found!");
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