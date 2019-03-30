import {ColumnModel} from "./column.model";
import {SectionModel} from "./section.model";
import { BaseModel } from "./base.model";

export class RowModel extends BaseModel<SectionModel,ColumnModel> {

  constructor(){
    super();
  }

  public setData(data : any) : RowModel{
    this.id = data.id;
    this.name = data.name;
    for (let i = 0; i < data.columns.length; i++) {
      this.children.push(new ColumnModel().setData(data.columns[i]));
    }
    return this;
  }

}
