export class CreateTransportDTO {
    constructor(
        public name: string,
        public routes: string[],
        public stops: string[],
        public description?: string,
    ) { }

    static validate(data: { [key: string]: any }): [string?, CreateTransportDTO?] {
        const { name, routes, stops, description } = data

        if (!name) return ["name is required!", undefined];
        if (Array.isArray(routes) && routes.length === 0) return ["Routes is required!", undefined];
        if (Array.isArray(stops) && stops.length === 0) return ["Stops is required!", undefined];

        return [undefined, new CreateTransportDTO(name, routes, stops, description)]
    }
}