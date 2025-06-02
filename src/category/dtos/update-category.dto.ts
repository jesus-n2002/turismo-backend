export class UpdateCategoryDTO{
    constructor(
        public name?: string,
        public description?: string,        
    ){}

    static validate( data: { [key: string]:any } ): [ string?, UpdateCategoryDTO? ] {
        const { name, description } = data
        
        if(name && name.length === 0) return ["Name is empty!", undefined];

        return [ undefined, new UpdateCategoryDTO(name, description) ]
    }
}