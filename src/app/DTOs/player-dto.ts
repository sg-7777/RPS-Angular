export class PlayerDTO{
    name: string;
    choice: string;
    result: string;

    constructor(name: string, choice: string){
        this.name = name;
        this.choice = choice;
    }
}
