export class ProjectImage {
    private static counter = 1;

    constructor(
        public name: string,
        public title: string,
        public url: string,
        public repository?: string | undefined,
        public readonly id: number = ProjectImage.counter++
    ) { }

    static fromJson(json: any): ProjectImage {
        const image = new ProjectImage(
            json.name,
            json.title,
            json.url,
            json.repository ?? undefined,
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
            title: this.title,
            repository: this.repository,
            url: this.url
        };
    }

}