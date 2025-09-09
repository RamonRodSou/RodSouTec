export class ProjectImage {
    private static counter = 1;

    constructor(
        public name: string,
        public type: string,
        public url: string,
        public readonly id: number = ProjectImage.counter++
    ) { }

    static fromJson(json: any): ProjectImage {
        const image = new ProjectImage(
            json.name,
            json.type,
            json.url,
            json.id
        )

        if (json.id >= ProjectImage.counter) {
            ProjectImage.counter = json.id + 1;
        }

        return image;
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