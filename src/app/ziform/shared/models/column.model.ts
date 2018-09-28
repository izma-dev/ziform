import {RowModel} from "./row.model";

export class ColumnModel {
  private _parent : RowModel;
  private _id : string;
  private _name : string;

  constructor(){}

  public setData(data : any) : ColumnModel {
    this._id = data.id;
    this._name = data.name;
    return this;
  }

  get parent(): RowModel {
    return this._parent;
  }

  set parent(value: RowModel) {
    this._parent = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
