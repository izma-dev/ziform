export class Action{
 
    constructor(private _action : string,private _element : any){
        
    }

    get action (): string{
        return this._action;
    }

    set action(a :string){
        this._action=a;
    }

    get element():any{
        return this._element;
    }

    set element(e : any){
        this._element = e;
    }
}