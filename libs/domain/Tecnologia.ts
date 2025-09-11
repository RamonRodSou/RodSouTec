export class Tecnologia {
    private static counter = 1;

    constructor(
        public name: string,
        public type: string,
        public url: string,
        public readonly id: number = Tecnologia.counter++
    ) { }

    static fromJson(json: any): Tecnologia {
        return new Tecnologia(
            json.name,
            json.type,
            json.url,
            json.id
        );
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            url: this.url
        };
    }

}