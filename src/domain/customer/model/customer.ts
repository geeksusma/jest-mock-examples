import { Name } from "./name";

export class Customer {
    private id:Number;
    private name:Name;

    public constructor(id:number, name:Name) {
        this.id=id;
        this.name=name;
    }

    public getId():Number {
        return this.id;
    }

    public getName():String {
        return this.name.getName();
    }
}