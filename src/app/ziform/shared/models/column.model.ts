import {RowModel} from "./row.model";
import { BaseModel } from "./base.model";

export class ColumnModel extends BaseModel<RowModel,any>{

  constructor(){
    super();
  }

  public setData(data : any) : ColumnModel {
    this.id = data.id;
    this.name = data.name;
    return this;
  }

}
