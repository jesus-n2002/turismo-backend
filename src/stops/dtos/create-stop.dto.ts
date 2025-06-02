export class CreateStopDTO {
    constructor(
        public name: string,
        public longitude: string,
        public latitude: string,
        public photo?: string,
        public description?: string,
    ) { }

    static validate(data: { [key: string]: any }): [string?, CreateStopDTO?] {
        const { name, longitude, latitude, photo, description } = data

        if (!name) return ["name is required!", undefined];
        if (!longitude) return ["name is required!", undefined];
        if (!latitude) return ["name is required!", undefined];

        return [undefined, new CreateStopDTO(name, longitude, latitude, photo, description)]
    }
}