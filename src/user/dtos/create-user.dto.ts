export class CreateUserDTO{
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public image?: string,
    ){}

    static validate( data: { [key: string]:any } ): [ string?, CreateUserDTO? ] {
        const { name, email, password, image } = data
        
        if(!name) return ["name is required!", undefined];
        if(!email) return ["email is required!", undefined];
        if(!password) return ["password is required!", undefined];

        return [ undefined, new CreateUserDTO(name, email, password, image) ]
    }
}