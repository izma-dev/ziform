import {RowModel} from "./row.model";
import { StructurorModel } from "./structuror.model";
import { BaseModel } from "./base.model";

export class SectionModel extends BaseModel<StructurorModel,RowModel> {

  constructor(){
    super(); 
  }

  public setData(data : any) : SectionModel{
    this.id = data.id;
    this.name = data.name;
    this.step = data.step;
    for (let i = 0; i < data.rows.length; i++) {
      this.children.push(new RowModel().setData(data.rows[i]));
    }
    return this;
  }
}
