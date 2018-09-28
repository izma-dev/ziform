import {ColumnModel} from "./column.model";
import {SectionModel} from "./section.model";

export class RowModel {
  private _parent : SectionModel;
  private _id : string;
  private _name : string;
  private _columns : ColumnModel[] = [];

  constructor(){}

  public setData(data : any) : RowModel{
    this._id = data.id;
    this._name = data.name;
    for (let i = 0; i < data.columns.length; i++) {
      this._columns.push(new ColumnModel().setData(data.columns[i]));
    }
    return this;
  }

  get parent(): SectionModel {
    return this._parent;
  }

  set parent(value: SectionModel) {
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

  get columns(): Array<ColumnModel> {
    return this._columns;
  }

  set columns(value: Array<ColumnModel>) {
    this._columns = value;
  }

  addColumn(value : ColumnModel) : number{
    return this._columns.push(value)
  }
}
