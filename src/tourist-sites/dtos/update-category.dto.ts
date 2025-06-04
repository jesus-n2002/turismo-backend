export class UpdateTouristsitesDTO{
    constructor(
        public name: string,
        public category: string,        
        public transport: string,        
        public longitude: string,        
        public latitude: string,        
        public photos?: string,        
        public description?: string,  
    ){}

    static validate( data: { [key: string]:any } ): [ string?, UpdateTouristsitesDTO? ] {
        const { name, category, transport, longitude, latitude, photos, description  } = data
        
        if(name && name.length === 0) return ["Name is empty!", undefined];

        return [ undefined, new UpdateTouristsitesDTO(name, category, transport, longitude, latitude, photos, description) ]
    }
}