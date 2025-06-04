export class CreateTouristSitesDTO{
    constructor(
        public name: string,
        public category: string,        
        public transport: string,        
        public longitude: string,        
        public latitude: string,        
        public photos?: string,        
        public description?: string,        
    ){}

    static validate( data: { [key: string]:any } ): [ string?, CreateTouristSitesDTO? ] {
        const { name, category, transport, longitude, latitude, photos, description} = data
        
        if(!name) return ["name is required!", undefined];

        return [ undefined, new CreateTouristSitesDTO(name, category, transport, longitude, latitude, photos, description) ]
    }
}