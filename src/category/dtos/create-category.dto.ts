export class CreateCategoryDTO{
    constructor(
        public name: string,
        public description?: string,        
    ){}

    static validate( data: { [key: string]:any } ): [ string?, CreateCategoryDTO? ] {
        const { name, description } = data
        
        if(!name) return ["name is required!", undefined];

        return [ undefined, new CreateCategoryDTO(name, description) ]
    }
}