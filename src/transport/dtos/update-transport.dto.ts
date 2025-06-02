export class UpdateTransportDTO {
    constructor(
        public name?: string,
        public routes?: string[],
        public stops?: string[],
        public description?: string,
    ) { }

    static validate(data: { [key: string]: any }): [string?, UpdateTransportDTO?] {
        const { name, routes, stops, description } = data

        if (name && name.length === 0) return ["Name is empty!", undefined];
        if (Array.isArray(routes) && routes && routes.length === 0) return ["Routes is empty!", undefined];
        if (Array.isArray(stops) && stops && stops.length === 0) return ["Stops is empty!", undefined];
        if (description && description.length === 0) return ["description is empty!", undefined];

        return [undefined, new UpdateTransportDTO(name, routes, stops, description)]
    }
}