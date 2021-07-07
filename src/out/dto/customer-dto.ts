export class CustomerDTO {
    private id:Number;
    private name:string;

    public constructor(id:Number, name:string) {
        this.id=id;
        this.name = name;
    }

    public equals(obj:CustomerDTO):boolean {

        return this.id==obj.id && this.name==obj.name;
    }
}