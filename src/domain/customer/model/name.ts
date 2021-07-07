export class Name {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName():string {
        return this.name;
    }

    public isEmpty():boolean {
        return (!this.name || /^\s*$/.test(this.name));
    }
}