export class Project {
    private static counter = 1;

    constructor(
        public name: string,
        public description: string,
        public path: string,
        public img: string,
        public readonly id: number = Project.counter++
    ) { }

    static fromJson(json: any): Project {
        const image = new Project(
            json.name,
            json.description,
            json.path,
            json.img,
            json.id
        )

        if (json.id >= Project.counter) {
            Project.counter = json.id + 1;
        }

        return image;
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            path: this.path,
            img: this.img
        };
    }

}