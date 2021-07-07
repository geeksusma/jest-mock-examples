import { Name } from "./name";

export class Customer {
    private id: Number;
    private name: Name;

    public constructor(id: Number, name: Name) {
        this.id = id;
        this.name = name;
    }

    public getId(): Number {
        return this.id;
    }

    public getName(): string {
        return this.name.getName();
    }
}