import { StringUtil } from "@utils/string";

export class Person {

    static counter: number = 1;

    constructor(
        public readonly id: number = Person.counter++,
        public name: string = StringUtil.EMPTY,
        public email: string = StringUtil.EMPTY,
        public phone: string = StringUtil.EMPTY,
        public description: string = StringUtil.EMPTY,
        public createdAt: string = new Date().toISOString(),
    ) { }

    static fromJson(json: any): Person {
        return new Person(
            json.id,
            json.name,
            json.email,
            json.phone,
            json.description,
            json.createdAt
        );
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            description: this.description,
            createdAt: this.createdAt
        };
    }
}
