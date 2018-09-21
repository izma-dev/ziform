import {RowModel} from "./row.model";

export class SectionModel {
  private _id : string;
  private _name : string;
  private _rows : RowModel[] = [];

  constructor(){}

  public setData(data : any) : SectionModel{
    this._id = data.id;
    this._name = data.name;
    for (let i = 0; i < data.rows.length; i++) {
      this._rows.push(new RowModel().setData(data.rows[i]));
    };
    return this;
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

  get rows(): Array<RowModel> {
    return this._rows;
  }

  set rows(value: Array<RowModel>) {
    this._rows = value;
  }

  addRow(value : RowModel) : number{
    return this._rows.push(value)
  }
}
