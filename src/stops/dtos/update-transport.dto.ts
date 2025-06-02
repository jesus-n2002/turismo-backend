export class UpdateStopDTO {
    constructor(
        public name?: string,
        public longitude?: string,
        public latitude?: string,
        public photo?: string,
        public description?: string,
    ) { }

    static validate(data: { [key: string]: any }): [string?, UpdateStopDTO?] {
        const { name, longitude, latitude, photo, description } = data

        if (name && name.length === 0) return ["Name is empty!", undefined];
        if (description && description.length === 0) return ["Description is empty!", undefined];

        return [undefined, new UpdateStopDTO(name, longitude, latitude, photo, description)]
    }
}